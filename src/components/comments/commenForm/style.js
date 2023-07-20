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
