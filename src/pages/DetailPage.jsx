import React, { useEffect } from 'react';
import styled from 'styled-components';
import HeritageDetail from '../components/heritageDetail/HeritageDetail';
import HeritageImages from '../components/heritageImages/HeritageImages';
import CommentForm from '../components/comments/commentForm/CommentForm';
import KakaoMap from '../components/kakaoMap/KakaoMap';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getHeritageInfoById } from '../api/heritage';
import Loading from '../components/loading/Loading';

const MainBoxLayout = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
`;

function DetailPage() {
  const param = useParams();
  const { data, isLoading } = useQuery(
    ['detail', param.id],
    async () => await getHeritageInfoById(param.id)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (isLoading) {
    return <Loading />;
  }

  const need = data.infoHead.toSpliced(3, 3);
  const params = need.reduce((acc, cur) => {
    acc[cur.name] = cur.value;
    return acc;
  }, {});
  const [longitude, latitude] = data.infoHead.slice(4);
  const imageUrl = data.infoBody.find(item => item.name === 'imageUrl');

  return (
    <MainBoxLayout>
      <HeritageDetail information={data.infoBody} />
      {latitude.value != 0 && longitude.value != 0 ? (
        <KakaoMap latitude={latitude.value} longitude={longitude.value} imageUrl={imageUrl.value} />
      ) : null}
      <HeritageImages {...params} id={param.id} />
      <CommentForm
        hId={data.infoHead[3].value}
        hName={`${data.infoBody[2].value} (${data.infoBody[3].value})`}
      />
    </MainBoxLayout>
  );
}

export default DetailPage;
