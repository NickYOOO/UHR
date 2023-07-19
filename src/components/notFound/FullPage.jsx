import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './style';

function FullPage() {
  const navigate = useNavigate('/');
  const goBack = () => navigate('/');
  setTimeout(goBack, 4 * 1000);

  return (
    <Styled.FullPageBox onClick={goBack}>
      <h2>알 수 없는 페이지 요청입니다.</h2>
      <h3>메인페이지로 이동 합니다.</h3>
    </Styled.FullPageBox>
  );
}

export default FullPage;
