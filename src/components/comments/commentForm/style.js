import { styled } from 'styled-components';
import Button from '../../common/button/Button';

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
  display: flex;
  justify-content: space-between;
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
  display: inline;
  margin-right: 8px;
`;

export const CommentButtons = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
//
export const MoreOptionsButton = styled.button`
  position: relative;
  background-color: transparent;
  padding: 4px 8px;
  border: none;
  float: right;
`;

export const OptionsButton = styled.div`
  position: absolute;
  top: 5px;
  left: -100px;
  width: 100px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: visibility 0.3s, opacity 0.3s;
`;

export const OptionActionButton = styled.button`
  display: block;
  width: 100%;
  padding: 6px 0;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  color: #000000;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff7c1d;
  }
`;
