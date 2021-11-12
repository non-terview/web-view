import React from 'react';
import styled from 'styled-components';

import ColorPalette from './InterviewColor';

// components
import Sidebar from './Sidebar';
import MenuItem from './MenuItem';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 1280px) {
  }
  background-color: skyblue;
`;

// content
const ContentContainer = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  width: 90%;
  height: 100%;
  background-color: orange;
`;

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

const Interview = () => {
  return (
    <Container>
      <Sidebar />
      <Content />
    </Container>
  );
};

// Content
const Content = () => {
  return (
    <ContentContainer>
      <VideoView />
      <MenuItem />
    </ContentContainer>
  );
};

// VideoSub 클릭시 VideoMain과 스왑
// VideoMain컴포넌트와 VideoSub컴포넌트 분할
const VideoView = () => {
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

export default Interview;
