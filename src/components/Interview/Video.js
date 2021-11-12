import React from 'react';
import styled from 'styled-components';

import ColorPalette from './InterviewColor';

// video
const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 80%;
  height: 100%;
  background-color: ${ColorPalette.VideoBackground};
`;
const VideoMain = styled.div`
  width: 640px;
  height: 360px;
  background-color: ${ColorPalette.VideoTestColor};
`;
const VideoSubContainter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 20%;
  margin-top: 10%;
`;
const VideoSub = styled.div`
  width: calc(16 * 10px);
  height: calc(9 * 10px);
  background-color: ${ColorPalette.VideoTestColor};
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    width: calc(16 * 12px);
    height: calc(9 * 12px);
  }
`;

// VideoSub 클릭시 VideoMain과 스왑
// VideoMain컴포넌트와 VideoSub컴포넌트 분할
const Video = () => {
  return (
    <VideoContainer>
      <VideoMain />
      <VideoSubContainter>
        <VideoSub />
        <VideoSub />
        <VideoSub />
        <VideoSub />
      </VideoSubContainter>
    </VideoContainer>
  );
};

export default Video;
