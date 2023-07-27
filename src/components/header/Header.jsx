import React, { useEffect, useState } from 'react';
import * as Styled from './style';
import Logo from '../../assets/icon/logo.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { auth, getUserInfo, signOutWithFB, watchAuthStateChange } from '../../api/firebase';

function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    watchAuthStateChange(user => {
      if (user) {
        setIsLoggedIn(true);

        getUserInfo(auth.currentUser?.email)
          .then(info => {
            setUserName(info.displayName);
          })
          .catch(error => {
            console.log('오류: ', error);
          });
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  const handleLogout = async () => {
    await signOutWithFB();
    navigate('/');
  };

  return (
    <Styled.Header>
      <Styled.TitleBox onClick={() => navigate('/')}>
        <img src={Logo} alt="logo" />
        <h1>당신의 문화유산 답사기</h1>
      </Styled.TitleBox>
      <Styled.UserBox>
        {isLoggedIn ? (
          <>
            <Link to={`/mypage`}>{`${userName} 님`}</Link>
            <Link onClick={handleLogout}>로그아웃</Link>
          </>
        ) : (
          <>
            <Link to={`/signin`}>로그인</Link>
            <Link to={`/signup`}>회원가입</Link>
          </>
        )}
      </Styled.UserBox>
    </Styled.Header>
  );
}

export default Header;
