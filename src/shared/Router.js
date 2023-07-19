import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import MyPage from '../pages/MyPage';
import Main from '../pages/Main';
import ListPage from '../pages/ListPage';
import DetailPage from '../pages/DetailPage';
import NotFoundPage from '../pages/NotFoundPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
