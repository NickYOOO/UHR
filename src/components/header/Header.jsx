import React from 'react';
import * as Styled from './style';
import Logo from '../../assets/icon/logo.svg';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <Styled.HeaderContainer>
      <Styled.TitleContainer>
        <img src={Logo} />
        <h1>당신의 문화유산 답사기</h1>
      </Styled.TitleContainer>
      <Styled.UserContainer>
        <Link>로그인</Link>
        <Link>회원가입</Link>
      </Styled.UserContainer>
    </Styled.HeaderContainer>
  );
}

export default Header;
