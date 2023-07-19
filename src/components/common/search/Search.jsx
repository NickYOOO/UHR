import React from 'react';
import Select from '../select/Select';
import InputWithLabel from '../input/InputWithLabel';
import Button from '../Button';
import * as Styled from './style';

export default function Search({ bg }) {
  return (
    <Styled.SearchBox bg={bg}>
      <Select />
      <Styled.InputWithLabelBox>
        <InputWithLabel type="text" id="searchText">
          문화재명
        </InputWithLabel>
        <Button w="80px" h="39px">
          검색
        </Button>
      </Styled.InputWithLabelBox>
    </Styled.SearchBox>
  );
}
