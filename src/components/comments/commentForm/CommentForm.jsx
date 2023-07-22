import React, { useState, useEffect } from 'react';
import * as Style from './style';
import { v4 as uuidv4 } from 'uuid';
import { auth, getUserInfo } from '../../../api/firebase';
import currentTime from '../../../utill/currentTime';
import { addHeritageComment, editHeritageComment, getHeritageComments } from '../../../api/comment';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Loading from '../../loading/Loading';
import useSystemModal from '../../../hooks/useSystemModal';
import { SystemModal } from '../../systemModal/SystemModal';
import { useSelector } from 'react-redux';
import CommentList from '../commentList/CommentList';

const CommentForm = ({ hId, hName }) => {
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');
  const [selectedComment, setSelectedComment] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editContent, setEditContent] = useState('');

  const systemModal = useSelector(state => state.systemModal);
  const { closeModal, confirmDeleteComment, confirmModal } = useSystemModal();

  const queryClient = useQueryClient();
  const { data: comments, isLoading } = useQuery(
    ['detail', 'comments', hId],
    async () => await getHeritageComments(hId)
  );

  const addCommentMutate = useMutation(addHeritageComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['detail', 'comments', hId]);
    },
    onError: () => {
      // 오류 처리.. 오류가 어쩌다 날라나
    },
  });
  const editCommentMutate = useMutation(editHeritageComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['detail', 'comments', hId]);
    },
  });

  useEffect(() => {
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

  if (isLoading) {
    return <Loading />;
  }

  const handleSubmit = async () => {
    const uniqueId = uuidv4();

    const newComment = {
      id: uniqueId,
      hId,
      hName,
      user: auth.currentUser ? auth.currentUser.uid : null,
      userName,
      content: comment,
      originTime: currentTime(),
      modifyTime: currentTime(),
    };
    addCommentMutate.mutate(newComment);
    setComment('');
  };

  const handleEditComment = async () => {
    const updatedComment = {
      ...selectedComment,
      content: editContent,
      modifyTime: currentTime(),
    };
    editCommentMutate.mutate({ id: selectedComment.id, updatedComment });
    hideEditMode();
  };

  const hideEditMode = () => {
    setEditMode(false);
    setEditContent('');
    setSelectedComment(null);
  };

  const currentUserUid = auth.currentUser ? auth.currentUser.uid : null;

  const listProps = {
    hId,
    setEditMode,
    setEditContent,
    selectedComment,
    setSelectedComment,
    currentUserUid,
    confirmModal,
    comments,
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
      <CommentList {...listProps} />
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
      {systemModal.isOpen && (
        <SystemModal confirmAndClose={confirmDeleteComment} closeModal={closeModal} />
      )}
    </>
  );
};

export default CommentForm;
