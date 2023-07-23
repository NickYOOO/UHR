import React from 'react';
import * as Style from './style';
import currentTime from '../../../utill/currentTime';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editHeritageComment } from '../../../api/comment';

const EditCommentForm = props => {
  const { hId, editContent, setEditContent, setEditMode, selectedComment, setSelectedComment } =
    props;

  const queryClient = useQueryClient();
  const editCommentMutate = useMutation(editHeritageComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['detail', 'comments', hId]);
    },
  });

  const isEditCommentEmpty = () => {
    return editContent.trim() === '';
  };

  const handleEditComment = () => {
    if (isEditCommentEmpty()) {
      return false;
    }

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

  return (
    <Style.EditCommentFormLayout>
      <Style.CommentLabel htmlFor="editCommentInput">수정 내용 </Style.CommentLabel>
      <Style.CommentInput
        id="editCommentInput"
        type="text"
        placeholder="댓글을 수정하세요..."
        value={editContent}
        onChange={e => setEditContent(e.target.value)}
      />
      <Style.CommentButton onMouseDown={handleEditComment} disabled={isEditCommentEmpty()}>
        수정 완료
      </Style.CommentButton>
      <Style.CommentButton onMouseDown={hideEditMode}>취소</Style.CommentButton>
    </Style.EditCommentFormLayout>
  );
};

export default EditCommentForm;
