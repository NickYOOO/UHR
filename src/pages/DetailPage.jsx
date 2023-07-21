import React, { useEffect } from 'react';
import styled from 'styled-components';
import HeritageDetail from '../components/heritageDetail/HeritageDetail';
import HeritageImages from '../components/heritageImages/HeritageImages';
import CommentForm from '../components/comments/commentForm/CommentForm';
import KakaoMap from '../components/kakaoMap/KakaoMap';
import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getHeritageInfo } from '../api/heritage';
import Loading from '../components/loading/Loading';

const MainBoxLayout = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
`;

function DetailPage() {
  const param = useParams();
  const location = useLocation();
  const { ccbaKdcd, ccbaCtcd, ccbaAsno } = location.state;
  const params = { ccbaKdcd, ccbaCtcd, ccbaAsno };
  const { data, isLoading } = useQuery(
    ['detail', param.id],
    async () => await getHeritageInfo(params)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (isLoading) {
    return <Loading />;
  }

  const [longitude, latitude] = data.infoHead.slice(4);
  const imageUrl = data.infoBody.find(item => item.name === 'imageUrl');

  return (
    <MainBoxLayout>
      <HeritageDetail information={data.infoBody} />
      <KakaoMap latitude={latitude.value} longitude={longitude.value} imageUrl={imageUrl.value} />
      <HeritageImages {...params} />
      <CommentForm
        hId={data.infoHead[3].value}
        hName={`${data.infoBody[2].value} (${data.infoBody[3].value})`}
      />
    </MainBoxLayout>
  );
}

export default DetailPage;
