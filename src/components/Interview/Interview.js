import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 1280px) {
  }
  background-color: skyblue;
`;

// sidebar
const SideBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: green;
  padding: 5px;
  width: 10%;
  min-width: 100px;
  height: 100%;
  z-index: 99;
  transition: 0.2s ease;
  &:hover {
    width: 20%;
    min-width: 200px;
  }
`;
const SidebarIcon = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: white;
  transition: 0.2s ease;
  cursor: pointer;
  @media screen and (max-width: 1280px) {
    background-color: yellow;
    width: 60px;
    height: 60px;
  }
  &:hover {
    background-color: grey;
    width: calc(100%+10px);
    height: calc(100%+10px);
  }
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
  background-color: #333;
`;

const VideoMain = styled.div`
  width: 640px;
  height: 360px;
  background-color: yellow;
`;
const VideoSubContainter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 100%;
  margin-top: 10%;
`;
const VideoSub = styled.div`
  width: calc(16 * 7px);
  height: calc(9 * 7px);
  background-color: skyblue;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    width: calc(16 * 10px);
    height: calc(9 * 10px);
  }
`;

// menuitem
const MenuItemContainer = styled.div`
  width: 20%;
  min-width: 250px;
  height: 100%;

  background-color: blue;
`;
const MenuItemTopContainer = styled.div`
  width: 100%;
  height: 40%;
  background-color: red;
`;
const Interview = () => {
  return (
    <Container>
      <SideBar />
      <Content />
    </Container>
  );
};

const SideBar = () => {
  return (
    <SideBarContainer>
      <SidebarIcon />
      <SidebarIcon />
      <SidebarIcon />
      <SidebarIcon />
      <SidebarIcon />
    </SideBarContainer>
  );
};

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

const MenuItem = () => {
  return (
    <MenuItemContainer>
      <MenuItemTopContainer />
    </MenuItemContainer>
  );
};

export default Interview;
