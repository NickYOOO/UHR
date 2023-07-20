import React from 'react';
import { getHeritageImg } from '../../api/heritage';
import { useQuery } from '@tanstack/react-query';
import Loading from '../loading/Loading';
import * as Style from './style';

function HeritageImages({ ccbaKdcd, ccbaCtcd, ccbaAsno }) {
  const params = {
    ccbaKdcd,
    ccbaCtcd,
    ccbaAsno,
  };

  const { data: images, isLoading } = useQuery(
    ['heritageImages'],
    async () => {
      const res = await getHeritageImg(params);
      return res;
    },
    {
      enabled: !!params,
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Style.HeritageImagesGrid>
        {images.map(image => {
          return <Style.HeritageImagesItem key={image} src={image} alt="" />;
        })}
      </Style.HeritageImagesGrid>
    </div>
  );
}

export default HeritageImages;
