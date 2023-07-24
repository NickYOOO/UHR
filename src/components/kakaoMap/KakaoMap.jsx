import React, { useEffect, useRef, useState } from 'react';
import { Map, MapMarker, MapTypeControl, Marker, ZoomControl } from 'react-kakao-maps-sdk';
import * as Style from './style';

const KakaoMap = ({ latitude, longitude, imageUrl }) => {
  const lat = latitude;
  const lng = longitude;
  const [isOpen, setIsOpen] = useState(false);
  const [center, setCenter] = useState({
    center: { lat, lng },
    isPanto: false,
  });

  useEffect(() => {
    const resizeCenter = () => {
      setCenter({
        center: { lat, lng },
        isPanto: false,
      });
    };
    window.addEventListener('resize', resizeCenter);

    return () => {
      window.removeEventListener('resize', resizeCenter);
    };
  }, []);

  return (
    <section>
      <Map
        level={4}
        center={center.center}
        isPanto={center.isPanto}
        style={{ width: '100%', height: '600px' }}
        zoomable={false}
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
        <ZoomControl position={window.kakao.maps.ControlPosition.BOTTOMRIGHT} />
        <MapTypeControl position={window.kakao.maps.ControlPosition.TOPRIGHT} />
        <MapMarker
          position={{ lat, lng }}
          onMouseOver={() => setIsOpen(true)}
          onMouseOut={() => setIsOpen(false)}
        >
          {isOpen && (
            <div style={{ position: 'absolute', top: '-125px' }}>
              <Style.TargetImg src={imageUrl} />
            </div>
          )}
        </MapMarker>
      </Map>
    </section>
  );
};

export default KakaoMap;
