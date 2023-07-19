import { styled } from 'styled-components';

export const SelectLayout = styled.div`
  display: flex;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

export const SelectBox = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin-right: 15px;
  z-index: 1;

  & > label {
    margin-right: 10px;
    color: #ffffff;
  }
`;

export const SelectSection = styled.div``;

export const SelectButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 130px;
  padding: 4px;
  border: none;
  border-radius: 6px;
  background-color: #ffffff;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const SelectList = styled.ul`
  position: absolute;
  display: none;
  width: 130px;
  margin-top: 2px;
  border-radius: 4px;
  z-index: 2;

  &.show {
    display: block;
  }
`;

export const SelectItem = styled.li`
  display: block;
  background-color: #f0f0f0;
  padding: 3px;
  text-align: left;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #082141;
    color: #ffffff;
  }

  &:first-child {
    border-radius: 5px 5px 0 0;
  }

  &:last-child {
    border-radius: 0 0 5px 5px;
  }
`;
