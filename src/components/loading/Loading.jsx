import React from 'react';
import * as Styled from './style';

function Loading() {
  return (
    <Styled.LoadingLayout>
      <Styled.LoadingSpan>이동하는 중...</Styled.LoadingSpan>
      <Styled.LoadingBox />
    </Styled.LoadingLayout>
  );
}

export default Loading;
