import React from 'react';
import styled from 'styled-components';
import HeritageDetail from '../components/heritageDetail/HeritageDetail';
import HeritageImages from '../components/heritageImages/HeritageImages';
import CommentForm from '../components/comments/commenForm/CommentForm';

const MainBoxLayout = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
`;

function DetailPage() {
  return (
    <MainBoxLayout>
      <HeritageDetail />
      <HeritageImages />
      <CommentForm />
    </MainBoxLayout>
  );
}

export default DetailPage;
