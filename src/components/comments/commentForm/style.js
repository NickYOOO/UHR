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

export const MoreOptionsButton = styled.button`
  background-color: transparent;
  padding: 4px 8px;
  border: none;
  float: right;
`;

export const OptionsButton = styled.div`
  position: relative;
  top: 8px;
  width: 90%;
  margin: 0 5%;
  background: #ffffff;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  &::after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 10px 10px;
    border-color: #ffffff transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: -10px;
    right: 7px;
  }
  ul {
    padding: 10px 0;
    li {
      cursor: pointer;
      width: 100%;
      text-align: center;
      padding: 15px;
      &:hover {
        background-color: #d8d8d8;
      }
    }
  }
`;
