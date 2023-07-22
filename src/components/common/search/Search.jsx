import React, { useState } from 'react';
import Select from '../select/Select';
import InputWithLabel from '../input/InputWithLabel';
import Button from '../Button';
import * as Styled from './style';
import { useNavigate } from 'react-router-dom';

export default function Search({ bg }) {
  const navigate = useNavigate();
  const [provinceId, setProvinceId] = useState('00');
  const [regionId, setRegionId] = useState('00');
  const [heritageName, setHeritageName] = useState('');

  const serchButtonClickHandler = () => {
    navigate('/list', {
      state: {
        ccbaCtcd: provinceId,
        ccbaLcto: regionId,
        ccbaMnm1: heritageName,
      },
    });
    console.log(
      'provinceId',
      typeof provinceId,
      provinceId,
      'regionId',
      typeof regionId,
      regionId,
      heritageName
    );
  };

  return (
    <Styled.SearchBox bg={bg}>
      <Select onSelectProvince={setProvinceId} onSelectRegion={setRegionId} />
      <Styled.InputWithLabelBox>
        <InputWithLabel
          type="text"
          id="searchText"
          value={heritageName}
          onChange={e => setHeritageName(e.target.value)}
        >
          문화재명
        </InputWithLabel>
        <Button onClick={serchButtonClickHandler} w="80px" h="39px">
          검색
        </Button>
      </Styled.InputWithLabelBox>
    </Styled.SearchBox>
  );
}

// 지역코드 시군구코드: Select
// 문화재명: InputWithLabel
// 받아옴
// 전체 00
// 검색 컴포넌트에 지역코드 시군구코드 문화재명
// 이게 있으면 검색할 때 List로 넘겨줌 -> List에서는 api 호출할때 저거 3개
// param으로 사용

// ?ccbaCtcd=11&ccbaLcto=12&ccbaMnm1=숭례문
