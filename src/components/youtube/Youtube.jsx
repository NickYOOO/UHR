import React from 'react';
import YouTube from 'react-youtube';
import * as Styled from './style';
import Layout from '../common/layout/Layout';

export default function Youtube() {
  const youtubeStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  };

  const youtubeOption = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
      rel: 0,
      modestbranding: 1,
    },
  };

  const youtubeEndFn = e => {
    e.target.stopVideo(0);
  };

  return (
    <section>
      <Layout>
        <Styled.YoutubeSection>
          <h2>유튜브로 전하는 문화재 소식</h2>
          <Styled.YoutubeWrapperBox>
            <Styled.YoutubeBox>
              <YouTube
                style={youtubeStyle}
                videoId="uXeXWKmiOXA"
                opts={youtubeOption}
                onEnd={youtubeEndFn}
              />
            </Styled.YoutubeBox>
            <Styled.YoutubeBox>
              <YouTube
                style={youtubeStyle}
                videoId="KWkexiYANw4"
                opts={youtubeOption}
                onEnd={youtubeEndFn}
              />
            </Styled.YoutubeBox>
          </Styled.YoutubeWrapperBox>
        </Styled.YoutubeSection>
      </Layout>
    </section>
  );
}
