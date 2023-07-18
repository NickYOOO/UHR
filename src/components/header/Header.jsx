import React, { useState } from 'react';

import * as Styled from './style';
import Logo from '../../assets/icon/logo.svg';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Styled.HeaderContainer>
      <Styled.TitleContainer onClick={() => navigate('/')}>
        <img src={Logo} />
        <h1>당신의 문화유산 답사기</h1>
      </Styled.TitleContainer>
      <Styled.UserContainer>
        {isLoggedIn ? (
          <>
            <Link to={`/detail/:id`}>르탄님</Link>
            <Link onClick={handleLogout}>로그아웃</Link>
          </>
        ) : (
          <>
            <Link to={`/signin`} onClick={handleLogin}>
              로그인
            </Link>
            <Link to={`/signup`}>회원가입</Link>
          </>
        )}
      </Styled.UserContainer>
    </Styled.HeaderContainer>
  );
}

export default Header;
