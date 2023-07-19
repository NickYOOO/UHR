import React, { useState } from 'react';
import * as Styled from './style';
import { BiSolidDownArrow } from 'react-icons/bi';

function Select() {
  const [cities, setCities] = useState([]);
  const [showProvinceOptions, setShowProvinceOptions] = useState(false);
  const [showRegionOptions, setShowRegionOptions] = useState(false);
  const [selectedProvinceOption, setSelectedProvinceOption] = useState('전체');
  const [selectedRegionOption, setSelectedRegionOption] = useState('전체');

  const [provinces] = useState([
    { id: 'ZZ', name: '전체' },
    { id: 11, name: '서울특별시' },
    { id: 31, name: '경기도' },
    { id: 23, name: '인천광역시' },
    { id: 32, name: '강원도' },
    { id: 33, name: '충청북도' },
    { id: 34, name: '충청남도' },
    { id: 35, name: '전라북도' },
    { id: 36, name: '전라남도' },
    { id: 37, name: '경상북도' },
    { id: 38, name: '경상남도' },
    { id: 22, name: '대구광역시' },
    { id: 26, name: '울산광역시' },
    { id: 21, name: '부산광역시' },
    { id: 24, name: '광주광역시' },
    { id: 25, name: '대전광역시' },
    { id: 45, name: '세종특별자치시' },
    { id: 50, name: '제주특별자치도' },
  ]);

  const regions = {
    11: [
      { id: '00', name: '전체' },
      { id: 11, name: '종로구' },
      { id: 12, name: '중구' },
      { id: 13, name: '용산구' },
      { id: 14, name: '성동구' },
      { id: 15, name: '동대문구' },
      { id: 16, name: '성북구' },
      { id: 17, name: '도봉구' },
      { id: 18, name: '은평구' },
      { id: 19, name: '서대문구' },
      { id: 20, name: '마포구' },
      { id: 21, name: '강서구' },
      { id: 22, name: '구로구' },
      { id: 23, name: '영등포구' },
      { id: 24, name: '동작구' },
      { id: 25, name: '관악구' },
      { id: 26, name: '강남구' },
      { id: 27, name: '강동구' },
      { id: 28, name: '송파구' },
      { id: 29, name: '중랑구' },
      { id: 30, name: '노원구' },
      { id: 31, name: '서초구' },
      { id: 32, name: '양천구' },
      { id: 33, name: '광진구' },
      { id: 34, name: '강북구' },
      { id: 35, name: '금천구' },
      { id: 99, name: '한강일원' },
      { id: 'ZZ', name: '서울전역' },
    ],
    31: [
      { id: '00', name: '전체' },
      { id: 11, name: '수원시' },
      { id: 12, name: '성남시' },
      { id: 13, name: '의정부시' },
      { id: 14, name: '안양시' },
      { id: 15, name: '부천시' },
      { id: 16, name: '광명시' },
      { id: 17, name: '안성시' },
      { id: 18, name: '동두천시' },
      { id: 19, name: '구리시' },
      { id: 20, name: '평택시' },
      { id: 21, name: '과천시' },
      { id: 22, name: '안산시' },
      { id: 25, name: '오산시' },
      { id: 26, name: '의왕시' },
      { id: 27, name: '군포시' },
      { id: 28, name: '시흥시' },
      { id: 30, name: '하남시' },
      { id: 31, name: '양주시' },
      { id: 70, name: '여주시' },
      { id: 35, name: '화성시' },
      { id: 37, name: '파주시' },
      { id: 39, name: '광주시' },
      { id: 40, name: '연천군' },
      { id: 41, name: '포천시' },
      { id: 42, name: '가평군' },
      { id: 43, name: '양평군' },
      { id: 44, name: '이천시' },
      { id: 45, name: '용인시' },
      { id: 47, name: '김포시' },
      { id: 50, name: '고양시' },
      { id: 51, name: '남양주시' },
      { id: 'ZZ', name: '경기전역' },
    ],
    23: [
      { id: '00', name: '전체' },
      { id: 11, name: '중구' },
      { id: 12, name: '동구' },
      { id: 20, name: '미추홀구' },
      { id: 15, name: '서구' },
      { id: 16, name: '남동구' },
      { id: 17, name: '연수구' },
      { id: 18, name: '부평구' },
      { id: 19, name: '계양구' },
      { id: 30, name: '강화군' },
      { id: 31, name: '옹진군' },
      { id: 'ZZ', name: '인천전역' },
    ],
    32: [
      { id: '00', name: '전체' },
      { id: 11, name: '춘천시' },
      { id: 12, name: '원주시' },
      { id: 13, name: '강릉시' },
      { id: 14, name: '동해시' },
      { id: 15, name: '태백시' },
      { id: 16, name: '속초시' },
      { id: 17, name: '삼척시' },
      { id: 32, name: '홍천군' },
      { id: 33, name: '횡성군' },
      { id: 35, name: '영월군' },
      { id: 36, name: '평창군' },
      { id: 37, name: '정선군' },
      { id: 38, name: '철원군' },
      { id: 39, name: '화천군' },
      { id: 40, name: '양구군' },
      { id: 41, name: '인제군' },
      { id: 42, name: '고성군' },
      { id: 43, name: '양양군' },
      { id: 44, name: '명주군' },
      { id: 99, name: '강원도일원' },
      { id: 'ZZ', name: '강원전역' },
    ],
    33: [
      { id: '00', name: '전체' },
      { id: 20, name: '청주시' },
      { id: 12, name: '충주시' },
      { id: 13, name: '제천시' },
      { id: 32, name: '보은군' },
      { id: 33, name: '옥천군' },
      { id: 34, name: '영동군' },
      { id: 35, name: '진천군' },
      { id: 36, name: '괴산군' },
      { id: 37, name: '음성군' },
      { id: 40, name: '단양군' },
      { id: 42, name: '증평군' },
      { id: 'ZZ', name: '충북전역' },
    ],
    34: [
      { id: '00', name: '전체' },
      { id: 11, name: '천안시' },
      { id: 12, name: '공주시' },
      { id: 15, name: '서산시' },
      { id: 16, name: '아산시' },
      { id: 17, name: '보령시' },
      { id: 18, name: '계룡시' },
      { id: 31, name: '금산군' },
      { id: 35, name: '논산시' },
      { id: 36, name: '부여군' },
      { id: 37, name: '서천군' },
      { id: 39, name: '청양군' },
      { id: 40, name: '홍성군' },
      { id: 41, name: '예산군' },
      { id: 43, name: '당진시' },
      { id: 46, name: '태안군' },
      { id: 'ZZ', name: '충남전역' },
    ],
    35: [
      { id: '00', name: '전체' },
      { id: 11, name: '전주시' },
      { id: 12, name: '군산시' },
      { id: 15, name: '남원시' },
      { id: 16, name: '김제시' },
      { id: 17, name: '정읍시' },
      { id: 18, name: '익산시' },
      { id: 31, name: '완주군' },
      { id: 32, name: '진안군' },
      { id: 33, name: '무주군' },
      { id: 34, name: '장수군' },
      { id: 35, name: '임실군' },
      { id: 37, name: '순창군' },
      { id: 39, name: '고창군' },
      { id: 40, name: '부안군' },
      { id: 'ZZ', name: '전북전역' },
    ],
    36: [
      { id: '00', name: '전체' },
      { id: 11, name: '목포시' },
      { id: 12, name: '여수시' },
      { id: 13, name: '순천시' },
      { id: 14, name: '나주시' },
      { id: 15, name: '여천시' },
      { id: 17, name: '광양시' },
      { id: 32, name: '담양군' },
      { id: 33, name: '곡성군' },
      { id: 34, name: '구례군' },
      { id: 36, name: '여천군' },
      { id: 38, name: '고흥군' },
      { id: 39, name: '보성군' },
      { id: 40, name: '화순군' },
      { id: 41, name: '장흥군' },
      { id: 42, name: '강진군' },
      { id: 43, name: '해남군' },
      { id: 44, name: '영암군' },
      { id: 45, name: '무안군' },
      { id: 47, name: '함평군' },
      { id: 48, name: '영광군' },
      { id: 49, name: '장성군' },
      { id: 50, name: '완도군' },
      { id: 51, name: '진도군' },
      { id: 52, name: '신안군' },
      { id: 53, name: '승주군' },
      { id: 'ZZ', name: '전남전역' },
    ],
    37: [
      { id: '00', name: '전체' },
      { id: 11, name: '포항시' },
      { id: 12, name: '경주시' },
      { id: 13, name: '김천시' },
      { id: 14, name: '안동시' },
      { id: 15, name: '구미시' },
      { id: 16, name: '영주시' },
      { id: 17, name: '영천시' },
      { id: 18, name: '상주시' },
      { id: 20, name: '경산시' },
      { id: 21, name: '문경시' },
      { id: 33, name: '의성군' },
      { id: 35, name: '청송군' },
      { id: 36, name: '영양군' },
      { id: 37, name: '영덕군' },
      { id: 42, name: '청도군' },
      { id: 43, name: '고령군' },
      { id: 44, name: '성주군' },
      { id: 45, name: '칠곡군' },
      { id: 50, name: '예천군' },
      { id: 52, name: '봉화군' },
      { id: 53, name: '울진군' },
      { id: 54, name: '울릉군' },
      { id: 'ZZ', name: '경북전역' },
    ],
    38: [
      { id: '00', name: '전체' },
      { id: 13, name: '진주시' },
      { id: 50, name: '창원시' },
      { id: 18, name: '김해시' },
      { id: 22, name: '밀양시' },
      { id: 25, name: '통영시' },
      { id: 26, name: '거제시' },
      { id: 27, name: '사천시' },
      { id: 32, name: '의령군' },
      { id: 33, name: '함안군' },
      { id: 34, name: '창녕군' },
      { id: 36, name: '양산시' },
      { id: 39, name: '의창군' },
      { id: 42, name: '고성군' },
      { id: 44, name: '남해군' },
      { id: 45, name: '하동군' },
      { id: 46, name: '산청군' },
      { id: 47, name: '함양군' },
      { id: 48, name: '거창군' },
      { id: 49, name: '합천군' },
      { id: 'ZZ', name: '경남전역' },
    ],
    22: [
      { id: '00', name: '전체' },
      { id: 11, name: '중구' },
      { id: 12, name: '동구' },
      { id: 13, name: '서구' },
      { id: 14, name: '남구' },
      { id: 15, name: '북구' },
      { id: 16, name: '수성구' },
      { id: 17, name: '달서구' },
      { id: 18, name: '달성군' },
      { id: 'ZZ', name: '대구전역' },
      { id: 32, name: '군위군' },
    ],
    26: [
      { id: '00', name: '전체' },
      { id: '01', name: '남구' },
      { id: '02', name: '동구' },
      { id: '03', name: '북구' },
      { id: '04', name: '중구' },
      { id: '05', name: '울주군' },
      { id: 'ZZ', name: '울산전역' },
    ],
    21: [
      { id: '00', name: '전체' },
      { id: 11, name: '중구' },
      { id: 12, name: '서구' },
      { id: 13, name: '동구' },
      { id: 14, name: '영도구' },
      { id: 15, name: '부산진구' },
      { id: 16, name: '동래구' },
      { id: 17, name: '남구' },
      { id: 18, name: '북구' },
      { id: 19, name: '해운대구' },
      { id: 20, name: '사하구' },
      { id: 21, name: '금정구' },
      { id: 22, name: '강서구' },
      { id: 23, name: '연제구' },
      { id: 24, name: '수영구' },
      { id: 25, name: '사상구' },
      { id: 26, name: '기장군' },
      { id: 'ZZ', name: '부산전역' },
    ],
    24: [
      { id: '00', name: '전체' },
      { id: 11, name: '동구' },
      { id: 12, name: '서구' },
      { id: 13, name: '북구' },
      { id: 14, name: '광산구' },
      { id: 15, name: '남구' },
      { id: 'ZZ', name: '광주전역' },
    ],
    25: [
      { id: '00', name: '전체' },
      { id: 11, name: '동구' },
      { id: 12, name: '중구' },
      { id: 13, name: '서구' },
      { id: 14, name: '유성구' },
      { id: 15, name: '대덕구' },
      { id: 'ZZ', name: '대전전역' },
    ],
    45: [{ id: '00', name: '세종시전역' }],
    50: [
      { id: '00', name: '전체' },
      { id: '01', name: '제주시' },
      { id: '02', name: '서귀포시' },
      { id: '03', name: '제주도일원' },
      { id: 'ZZ', name: '제주전역' },
    ],
  };

  const provinceClickHandler = event => {
    const provinceId = parseInt(event.target.value);
    setCities(regions[provinceId] || []);
    setSelectedProvinceOption(event.target.textContent);
    setShowProvinceOptions(false);
  };

  const regionClickHandler = event => {
    const regionId = parseInt(event.target.value);
    const regionName = event.target.textContent;
    setSelectedRegionOption(regionName);
    setShowRegionOptions(false);
  };

  const provinceToggleOptions = () => {
    setShowProvinceOptions(!showProvinceOptions);
  };

  const regionToggleOptions = () => {
    setShowRegionOptions(!showRegionOptions);
  };

  return (
    <Styled.SelectLayout>
      <Styled.SelectBox>
        <label htmlFor="provinceSelect">지역</label>
        <div>
          <Styled.SelectButton id="provinceSelect" type="button" onClick={provinceToggleOptions}>
            {selectedProvinceOption}
            <BiSolidDownArrow size="20" color="#000000" />
          </Styled.SelectButton>
          <Styled.SelectList className={`${showProvinceOptions ? 'show' : 'hide'}`}>
            {provinces.map(province => (
              <Styled.SelectItem
                key={province.id}
                value={province.id}
                onClick={provinceClickHandler}
              >
                {province.name}
              </Styled.SelectItem>
            ))}
          </Styled.SelectList>
        </div>
      </Styled.SelectBox>

      <Styled.SelectBox>
        <label htmlFor="regionSelect">시/군/구</label>
        <div>
          <Styled.SelectButton id="regionSelect" type="button" onClick={regionToggleOptions}>
            {selectedRegionOption}
            <BiSolidDownArrow size="20" color="#000000" />
          </Styled.SelectButton>
          <Styled.SelectList className={`${showRegionOptions ? 'show' : 'hide'}`}>
            {cities.map(city => (
              <Styled.SelectItem key={city.id} value={city.id} onClick={regionClickHandler}>
                {city.name}
              </Styled.SelectItem>
            ))}
          </Styled.SelectList>
        </div>
      </Styled.SelectBox>
    </Styled.SelectLayout>
  );
}

export default Select;
