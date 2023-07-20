import styled from 'styled-components';

export const CommentListContainer = styled.div`
  margin-top: 20px;
`;

export const CommentItem = styled.div`
  border-bottom: 1px solid #082141;
  padding: 10px;
  margin-bottom: 10px;
`;

export const CommentHeader = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const CommentUser = styled.span`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 10px;
`;

export const CommentTime = styled.span`
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CommentContent = styled.p`
  margin: 0;
  font-size: 16px;
`;
