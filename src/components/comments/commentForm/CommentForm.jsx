import React, { useState, useEffect } from 'react';
import * as Style from './style';
import { v4 as uuidv4 } from 'uuid';
import { auth, getUserInfo } from '../../../api/firebase';
import { HiDotsVertical } from 'react-icons/hi';
import api from '../../../axios/api';
import currentTime from '../../../utill/currentTime';

const CommentForm = ({ hId, hName }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [userName, setUserName] = useState('');
  const [selectedComment, setSelectedComment] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    fetchComments();

    if (auth.currentUser) {
      getUserInfo(auth.currentUser.email)
        .then(info => {
          setUserName(info.displayName);
        })
        .catch(error => {
          console.log('오류: ', error);
        });
    }
  }, [hId, userName]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`http://localhost:3001/comments?hId=${hId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleSubmit = async () => {
    const uniqueId = uuidv4();

    const newComment = {
      id: uniqueId,
      hId,
      hName,
      user: auth.currentUser ? auth.currentUser.uid : null,
      username: userName,
      content: comment,
      originTime: currentTime(),
      modifyTime: currentTime(),
    };

    try {
      const response = await fetch('http://localhost:3001/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });

      if (response.ok) {
        setComment('');
        fetchComments();
      } else {
        console.log('댓글 작성 실패');
      }
    } catch (error) {
      console.log('댓글 작성 오류:', error);
    }
  };

  const handleDeleteComment = async commentId => {
    const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
    if (confirmDelete) {
      try {
        await api.delete(`/comments/${commentId}`);
        fetchComments();
      } catch (error) {
        console.log('댓글 삭제 오류:', error);
      }
    }
  };

  const handleEditComment = async () => {
    const updatedComment = {
      ...selectedComment,
      content: editContent,
      modifyTime: new Date().toISOString(),
    };

    try {
      const response = await fetch(`http://localhost:3001/comments/${selectedComment.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedComment),
      });

      if (response.ok) {
        setEditMode(false);
        setEditContent('');
        setSelectedComment(null);
        fetchComments();
      } else {
        console.log('댓글 수정 실패');
      }
    } catch (error) {
      console.log('댓글 수정 오류:', error);
    }
  };

  const hideEditMode = () => {
    setEditMode(false);
    setEditContent('');
    setSelectedComment(null);
  };

  const currentUserUid = auth.currentUser ? auth.currentUser.uid : null;

  return (
    <>
      <Style.CommentFormContainer>
        <Style.CommentLabel htmlFor="commentInput">내용 </Style.CommentLabel>
        <Style.CommentInput
          id="commentInput"
          type="text"
          placeholder="댓글을 입력하세요..."
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <Style.CommentButton onClick={handleSubmit}>등록</Style.CommentButton>
      </Style.CommentFormContainer>
      <Style.CommentListContainer>
        {comments.map(comment => (
          <Style.CommentItem key={comment.id}>
            <div>
              <Style.CommentHeader>
                <Style.CommentUser>{comment.username}</Style.CommentUser>
                <Style.CommentTime>{comment.originTime}</Style.CommentTime>
              </Style.CommentHeader>
              <Style.CommentContent>{comment.content}</Style.CommentContent>
            </div>
            {currentUserUid === comment.user && (
              <Style.MoreOptionsButton>
                <HiDotsVertical
                  size="25"
                  color="#000000"
                  onClick={() => {
                    setSelectedComment(comment);
                    setEditMode(false);
                    setEditContent('');
                  }}
                />
                {selectedComment === comment && (
                  <Style.OptionsButton>
                    <Style.OptionActionButton onClick={() => handleDeleteComment(comment.id)}>
                      삭제
                    </Style.OptionActionButton>
                    <Style.OptionActionButton
                      onClick={() => {
                        setEditMode(true);
                        setEditContent(comment.content);
                      }}
                    >
                      수정
                    </Style.OptionActionButton>
                  </Style.OptionsButton>
                )}
              </Style.MoreOptionsButton>
            )}
          </Style.CommentItem>
        ))}
      </Style.CommentListContainer>
      {editMode && (
        <Style.CommentFormContainer>
          <Style.CommentLabel htmlFor="editCommentInput">수정 내용 </Style.CommentLabel>
          <Style.CommentInput
            id="editCommentInput"
            type="text"
            placeholder="댓글을 수정하세요..."
            value={editContent}
            onChange={e => setEditContent(e.target.value)}
          />
          <Style.CommentButton onClick={handleEditComment}>수정 완료</Style.CommentButton>
          <Style.CommentButton onClick={hideEditMode}>취소</Style.CommentButton>
        </Style.CommentFormContainer>
      )}
    </>
  );
};

export default CommentForm;
