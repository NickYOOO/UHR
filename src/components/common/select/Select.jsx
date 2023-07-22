import React, { useState } from 'react';
import * as Styled from './style';
import { BiSolidDownArrow } from 'react-icons/bi';
import REGIONS from './regions';
import PROVINCES from './provinces';

function Select({ onSelectRegion, onSelectProvince }) {
  const [cities, setCities] = useState([]);
  const [showProvinceOptions, setShowProvinceOptions] = useState(false);
  const [showRegionOptions, setShowRegionOptions] = useState(false);
  const [selectedProvinceOption, setSelectedProvinceOption] = useState('전체');
  const [selectedRegionOption, setSelectedRegionOption] = useState('전체');

  const [provinces] = useState(PROVINCES);

  const provinceClickHandler = ({ target }) => {
    let provinceId = target.value.toString();
    // const provinceId = parseInt(target.value);
    setSelectedRegionOption('전체');
    setCities(REGIONS[provinceId] || []);
    setSelectedProvinceOption(target.textContent);
    setShowProvinceOptions(false);
    onSelectProvince(provinceId);
    console.log(target.value);
  };

  const regionClickHandler = ({ target }) => {
    const regionId = target.value.toString();
    // const regionId = parseInt(target.value);
    const regionName = target.textContent;
    setSelectedRegionOption(regionName);
    setShowRegionOptions(false);
    onSelectRegion(regionId);
  };

  const provinceToggleOptions = () => {
    setShowProvinceOptions(!showProvinceOptions);
  };

  const regionToggleOptions = () => {
    setShowRegionOptions(!showRegionOptions);
  };

  const onBlurList = () => {
    setShowProvinceOptions(false);
    setShowRegionOptions(false);
  };

  return (
    <Styled.SelectLayout>
      <Styled.SelectBox>
        <label htmlFor="provinceSelect">지역</label>
        <div>
          <Styled.SelectButton
            id="provinceSelect"
            type="button"
            onClick={provinceToggleOptions}
            onBlur={onBlurList}
          >
            {selectedProvinceOption}
            <BiSolidDownArrow size="20" color="#000000" />
          </Styled.SelectButton>
          {showProvinceOptions && (
            <Styled.SelectList>
              {provinces.map(province => {
                // console.log(province);
                return (
                  <Styled.SelectItem
                    key={province.id}
                    value={province.id}
                    onMouseDown={e => {
                      e.preventDefault();
                    }}
                    onClick={provinceClickHandler}
                  >
                    {province.name}
                  </Styled.SelectItem>
                );
              })}
            </Styled.SelectList>
          )}
        </div>
      </Styled.SelectBox>

      <Styled.SelectBox>
        <label htmlFor="regionSelect">시/군/구</label>
        <div>
          <Styled.SelectButton
            id="regionSelect"
            type="button"
            onClick={regionToggleOptions}
            onBlur={onBlurList}
          >
            {selectedRegionOption}
            <BiSolidDownArrow size="20" color="#000000" />
          </Styled.SelectButton>
          {showRegionOptions && (
            <Styled.SelectList>
              {cities.map(city => (
                <Styled.SelectItem
                  key={city.id}
                  value={city.id}
                  onMouseDown={e => {
                    e.preventDefault();
                  }}
                  onClick={regionClickHandler}
                >
                  {city.name}
                </Styled.SelectItem>
              ))}
            </Styled.SelectList>
          )}
        </div>
      </Styled.SelectBox>
    </Styled.SelectLayout>
  );
}

export default Select;
