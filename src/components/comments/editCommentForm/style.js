import { styled } from 'styled-components';
import Button from '../../common/button/Button';

export const EditCommentFormLayout = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #ededed;
  border-radius: 8px;
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
