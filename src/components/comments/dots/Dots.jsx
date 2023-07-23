import React, { useState } from 'react';
import * as Style from './style';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteHeritageComment } from '../../../api/comment';
import { HiDotsVertical } from 'react-icons/hi';

const Dots = props => {
  const {
    hId,
    setEditMode,
    confirmModal,
    setEditContent,
    selectedComment,
    setSelectedComment,
    comment,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const queryClient = useQueryClient();
  const deleteCommentMutate = useMutation(deleteHeritageComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['detail', 'comments', hId]);
    },
  });

  const handleDeleteComment = async commentId => {
    confirmModal(true, '정말 삭제하시겠습니까?', commentId, deleteCommentMutate);
    setSelectedComment(null);
  };

  return (
    <>
      <Style.MoreOptionsButton
        onClick={() => {
          setSelectedComment(comment);
          setIsOpen(true);
        }}
        onBlur={() => {
          setIsOpen(false);
        }}
      >
        <HiDotsVertical size="25" color="#000000" />
      </Style.MoreOptionsButton>
      {selectedComment === comment && isOpen && (
        <Style.OptionsBox>
          <Style.OptionActionButton onMouseDown={() => handleDeleteComment(comment.id)}>
            삭제
          </Style.OptionActionButton>
          <Style.OptionActionButton
            onMouseDown={() => {
              setEditMode(true);
              setEditContent(comment.content);
              setSelectedComment(comment);
            }}
          >
            수정
          </Style.OptionActionButton>
        </Style.OptionsBox>
      )}
    </>
  );
};

export default Dots;
