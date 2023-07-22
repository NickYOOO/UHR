import React from 'react';
import * as Style from './style';
import Dots from '../dots/Dots';

const CommentList = props => {
  const { currentUserUid, comments } = props;

  return (
    <Style.CommentListContainer>
      {comments.map(comment => (
        <Style.CommentItem key={comment.id}>
          <div>
            <Style.CommentHeader>
              <Style.CommentUser>{comment.userName}</Style.CommentUser>
              <Style.CommentTime>{comment.originTime}</Style.CommentTime>
            </Style.CommentHeader>
            <Style.CommentContent>{comment.content}</Style.CommentContent>
          </div>
          {currentUserUid === comment.user && <Dots {...props} comment={comment} />}
        </Style.CommentItem>
      ))}
    </Style.CommentListContainer>
  );
};

export default CommentList;
