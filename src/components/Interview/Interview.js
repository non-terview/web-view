import React from 'react';
import styled from 'styled-components';

import ColorPalette from './InterviewColor';

// components
import Sidebar from './Sidebar';
import MenuItem from './MenuItem';
import Video from './Video';

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
      <Video />
      <MenuItem />
    </ContentContainer>
  );
};

export default Interview;
