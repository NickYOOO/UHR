import React, { useState } from 'react';
import * as Style from './style';
import Dots from '../dots/Dots';
import EditCommentForm from '../editCommentForm/EditCommentForm';

const CommentList = props => {
  const { currentUserUid, comments, confirmModal, hId } = props;
  const [selectedComment, setSelectedComment] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editContent, setEditContent] = useState('');

  const dotsProps = {
    hId,
    confirmModal,
    setEditMode,
    setEditContent,
    selectedComment,
    setSelectedComment,
  };

  const editFormProps = {
    hId,
    editContent,
    setEditContent,
    setEditMode,
    selectedComment,
    setSelectedComment,
  };

  return (
    <Style.CommentListContainer>
      {comments.toReversed().map(comment => (
        <Style.CommentItem key={comment.id}>
          <Style.CommentItemContent>
            <div>
              <Style.CommentHeader>
                <Style.CommentUser>{comment.userName}</Style.CommentUser>
                <Style.CommentTime>{comment.originTime}</Style.CommentTime>
              </Style.CommentHeader>
              <Style.CommentContent>{comment.content}</Style.CommentContent>
            </div>
            {currentUserUid === comment.user && <Dots {...dotsProps} comment={comment} />}
          </Style.CommentItemContent>
          {editMode && selectedComment === comment && <EditCommentForm {...editFormProps} />}
        </Style.CommentItem>
      ))}
    </Style.CommentListContainer>
  );
};

export default CommentList;
