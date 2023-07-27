import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './style';

function FullPage() {
  const navigate = useNavigate('/');
  const goBack = () => navigate('/');
  setTimeout(goBack, 3 * 1000);

  return (
    <Styled.FullPageBox onClick={goBack}>
      <h2>알 수 없는 페이지 요청입니다.</h2>
      <h3>3초 뒤 메인페이지로 이동 합니다.</h3>
      <p onClick={goBack}>바로 이동하기</p>
    </Styled.FullPageBox>
  );
}

export default FullPage;
