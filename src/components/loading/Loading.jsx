import React from 'react';
import * as Styled from './style';

function Loading({ text }) {
  return (
    <Styled.LoadingLayout>
      <Styled.LoadingSpan>{text ? text : '이동하는 중...'}</Styled.LoadingSpan>
      <Styled.LoadingBox />
    </Styled.LoadingLayout>
  );
}

export default Loading;
