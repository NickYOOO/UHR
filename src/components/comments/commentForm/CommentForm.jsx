import React, { useState } from 'react';
import * as Style from './style';
import { v4 as uuidv4 } from 'uuid';

const CommentForm = ({ hId }) => {
  const [comment, setComment] = useState('');
  // console.log(hId)
  const handleSubmit = async () => {
    const uniqueId = uuidv4();

    const newComment = {
      id: uniqueId,
      hId,
      // user: '작성자uid',
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
      } else {
        console.log('댓글 작성 실패');
      }
    } catch (error) {
      console.log('댓글 작성 오류:', error);
    }
  };

  return (
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
  );
};

export default CommentForm;
