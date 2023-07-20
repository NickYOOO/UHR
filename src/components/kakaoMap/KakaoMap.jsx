import React, { useEffect, useRef, useState } from 'react';
import { Map, MapMarker, Marker } from 'react-kakao-maps-sdk';
import * as Style from './style';

const KakaoMap = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [center, setCenter] = useState({
    center: { lat: 37.559975221378, lng: 126.975312652739 },
    isPanto: false,
  });

  useEffect(() => {
    const resizeCenter = () => {
      setCenter({
        center: { lat: 37.559975221378, lng: 126.975312652739 },
        isPanto: false,
      });
    };
    window.addEventListener('resize', resizeCenter);

    return () => {
      window.removeEventListener('resize', resizeCenter);
    };
  }, []);

  return (
    <Map
      center={center.center}
      isPanto={center.isPanto}
      style={{ width: '100%', height: '360px' }}
      onCenterChanged={map =>
        setCenter({
          level: map.getLevel(),
          center: {
            lat: map.getCenter().getLat(),
            lng: map.getCenter().getLng(),
          },
        })
      }
    >
      <MapMarker
        position={{ lat: 37.559975221378, lng: 126.975312652739 }}
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
      >
        {isOpen && (
          <Style.TargetImg src="http://www.cha.go.kr/unisearch/images/national_treasure/2685609.jpg" />
        )}
      </MapMarker>
    </Map>
  );
};

export default KakaoMap;
