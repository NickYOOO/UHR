import { styled } from 'styled-components';

export const CommentListContainer = styled.ul`
  margin-top: 20px;
`;

export const CommentItemContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #082141;
  padding: 10px;
  margin-bottom: 10px;
`;

export const CommentItem = styled.li``;

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
  display: inline;
  margin-right: 8px;
`;
