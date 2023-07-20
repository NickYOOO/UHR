import React from 'react';
import styled from 'styled-components';
import HeritageDetail from '../components/heritageDetail/HeritageDetail';
import HeritageImages from '../components/heritageImages/HeritageImages';
import CommentForm from '../components/comments/commentForm/CommentForm';
import KakaoMap from '../components/kakaoMap/KakaoMap';
import CommentList from '../components/comments/commentList/CommentList';

const MainBoxLayout = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
`;

function DetailPage() {
  return (
    <MainBoxLayout>
      <HeritageDetail />
      <KakaoMap latitude={37.559975221378} longitude={126.975312652739} />
      <HeritageImages />
      <CommentForm />
      <CommentList />
    </MainBoxLayout>
  );
}

export default DetailPage;
