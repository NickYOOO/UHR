import { styled } from 'styled-components';

export const MoreOptionsButton = styled.button`
  position: relative;

  background-color: transparent;
  padding: 4px 8px;
  border: none;
  cursor: pointer;
`;

export const OptionsBox = styled.div`
  position: absolute;
  top: 5px;
  right: 50px;
  width: 100px;
  list-style: none;
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
