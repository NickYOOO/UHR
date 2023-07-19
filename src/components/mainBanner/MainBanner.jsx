import React from 'react';
import * as Styled from './style';
import Search from '../common/search/Search';

export default function MainBanner() {
  return (
    <Styled.MainBannerSection>
      <div className="main-text-box">
        <p>당신의 문화 유산 답사기</p>
        <p>문화 유산의 매력적인 세계로 여러분을 초대합니다.</p>
      </div>

      <Styled.SearchPositionBox>
        <Search bg="#082141ad" />
      </Styled.SearchPositionBox>
    </Styled.MainBannerSection>
  );
}
