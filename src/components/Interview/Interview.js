import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: skyblue;
`;

const SideBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: green;
  width: 10%;
  height: 100%;
  z-index: 99;
  transition: 0.2s ease;
  &:hover {
    width: 20%;
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
const VideoContainer = styled.div`
  background-color: darkgrey;
  width: 80%;
  height: 100%;
`;
const MenuItemContainer = styled.div`
  background-color: blue;
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
  return <SideBarContainer>d</SideBarContainer>;
};

const Content = () => {
  return (
    <ContentContainer>
      <VideoContainer></VideoContainer>
      <MenuItemContainer></MenuItemContainer>
    </ContentContainer>
  );
};

export default Interview;
