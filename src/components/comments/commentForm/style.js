import { styled } from 'styled-components';
import Button from '../../common/Button';

export const CommentFormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const CommentLabel = styled.label`
  margin-right: 10px;
  font-size: 16px;
`;

export const CommentInput = styled.input`
  flex: 1;
  height: 40px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 16px;
`;

export const CommentButton = styled(Button)`
  margin-left: 10px;
`;

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
