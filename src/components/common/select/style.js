import { styled } from 'styled-components';

export const SelectLayout = styled.div`
  display: flex;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    & div:first-child {
      z-index: 1;
    }
  }
`;

export const SelectBox = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin-right: 15px;

  & > label {
    margin-right: 10px;
    color: #ffffff;
  }
  @media screen and (max-width: 576px) {
    & > label {
      width: 61px;
    }
  }
`;

export const SelectButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  padding: 4px;
  border: none;
  border-radius: 6px;
  background-color: #ffffff;
  font-size: 18px;

  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
  @media screen and (max-width: 1200px) {
    width: 160px;
  }
  @media screen and (max-width: 576px) {
    width: 145px;
  }
`;

export const SelectList = styled.ul`
  position: absolute;
  width: 200px;
  max-height: 176px;
  overflow-y: scroll;
  margin-top: 2px;
  border-radius: 5px;
  z-index: 2;
  background-color: #f0f0f0;

  @media screen and (max-width: 1200px) {
    width: 160px;
  }
  @media screen and (max-width: 576px) {
    width: 145px;
    height: 132px;
  }
`;

export const SelectItem = styled.li`
  display: block;
  height: 22px;
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
