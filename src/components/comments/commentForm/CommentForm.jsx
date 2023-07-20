import React, { useState, useEffect } from 'react';
import * as Style from './style';
import { v4 as uuidv4 } from 'uuid';
import { auth } from '../../../api/firebase';

const CommentForm = ({ hId }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch('http://localhost:3001/comments');
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
      user: auth.currentUser ? auth.currentUser.uid : null,
      content: comment,
      originTime: new Date().toISOString(),
      modifyTime: new Date().toISOString(),
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
            <Style.CommentHeader>
              <Style.CommentUser>{comment.user}</Style.CommentUser>
              <Style.CommentTime>{comment.originTime}</Style.CommentTime>
            </Style.CommentHeader>
            <Style.CommentContent>{comment.content}</Style.CommentContent>
          </Style.CommentItem>
        ))}
      </Style.CommentListContainer>
    </>
  );
};

export default CommentForm;
