import React, { useEffect, useState } from 'react';
import { getHeritageImg } from '../../api/heritage';
import { useQuery } from '@tanstack/react-query';
import Loading from '../loading/Loading';
import * as Style from './style';


function HeritageImages({ ccbaKdcd, ccbaCtcd, ccbaAsno }) {
  const [showMore, setShowMore] = useState(false);
  const [showImages, setShowImages] = useState(6);

  useEffect(() => {
    function updateColumns() {
      if (1200 <= window.innerWidth) {
        setShowImages(6);
      } else if (800 < window.innerWidth && window.innerWidth < 1200) {
        setShowImages(4);
      } else if (window.innerWidth <= 800) {
        setShowImages(2);
      }
    }

    updateColumns();

    window.addEventListener('resize', updateColumns);
    return () => {
      window.removeEventListener('resize', updateColumns);
    };
  }, []);

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

  const onClickShowMoreHandler = () => {
    setShowMore(!showMore);
  };

  return (
    <Style.HeritageImagesLayout>
      <Style.HeritageImagesGrid>
        {images.slice(0, showMore ? images.length : showImages).map((url, index) => {
          return <Style.HeritageImagesItem key={index} src={url} alt={`Heritage ${index + 1}`} />;
        })}
      </Style.HeritageImagesGrid>
      {!showMore && images.length > 6 && (
        <Style.HeritageImagesButton onClick={onClickShowMoreHandler}>
          더보기 +
        </Style.HeritageImagesButton>
      )}
    </Style.HeritageImagesLayout>
  );
}

export default HeritageImages;
