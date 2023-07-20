import React from 'react';
import * as Style from './style';

const comments = [
  {
    id: '1',
    hId: '0001',
    user: '작성자1',
    content: '댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용.',
    originTime: '2023. 7. 17. 오후 1:12:30',
    modifyTime: '2023. 7. 17. 오후 1:12:30',
  },
  {
    id: '2',
    hId: '0001',
    user: '작성자1',
    content: '댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용 댓글 내용.',
    originTime: '2023. 7. 17. 오후 1:12:30',
    modifyTime: '2023. 7. 17. 오후 1:12:30',
  },
];

const CommentList = () => {
  return (
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
  );
};

export default CommentList;
