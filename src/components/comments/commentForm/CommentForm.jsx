import React, { useState, useEffect } from 'react';
import * as Style from './style';
import { v4 as uuidv4 } from 'uuid';
import { auth, getUserInfo } from '../../../api/firebase';
import currentTime from '../../../utill/currentTime';
import { addHeritageComment, getHeritageComments } from '../../../api/comment';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Loading from '../../loading/Loading';
import useSystemModal from '../../../hooks/useSystemModal';
import { SystemModal } from '../../systemModal/SystemModal';
import { useSelector } from 'react-redux';
import CommentList from '../commentList/CommentList';
import { useNavigate } from 'react-router-dom';

const CommentForm = ({ hId, hName }) => {
  const navigate = useNavigate();
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');

  const systemModal = useSelector(state => state.systemModal);
  const { alertModal, closeModal, confirmDeleteComment, confirmModal } = useSystemModal();

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

  const isCommentEmpty = () => {
    return comment.trim() === '';
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (isCommentEmpty()) {
      return false;
    }

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

  const onChangeCommentInput = ({ target }) => {
    if (!auth.currentUser) {
      alertModal(true, '로그인이 필요합니다.');
      navigate('/signin');
    }
    setComment(target.value);
  };

  const currentUserUid = auth.currentUser ? auth.currentUser.uid : null;

  const listProps = {
    hId,
    currentUserUid,
    confirmModal,
    comments,
  };

  return (
    <section>
      <Style.CommentFormContainer onSubmit={handleSubmit}>
        <Style.CommentLabel htmlFor="commentInput">내용 </Style.CommentLabel>
        <Style.CommentInput
          id="commentInput"
          type="text"
          placeholder="댓글을 입력하세요..."
          value={comment}
          onChange={onChangeCommentInput}
        />
        <Style.CommentButton disabled={isCommentEmpty()}>등록</Style.CommentButton>
      </Style.CommentFormContainer>
      <CommentList {...listProps} />
      {systemModal.isOpen && (
        <SystemModal confirmAndClose={confirmDeleteComment} closeModal={closeModal} />
      )}
    </section>
  );
};

export default CommentForm;
