import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: skyblue;
`;
const ContainerS = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: skyblue;
`;

// menubar
const MenuBarContainer = styled.div`
  width: 10%;
  height: 100%;
  background-color: #3e3e3e;
  transition: 0.2s ease;
  // menu hover시 video container 위로 겹치게
  z-index: 99;
  &:hover {
    width: 15%;
  }
`;

// content
const ContentNull = styled.div`
  flex: 1 1 0;
  height: 100%;
  background-color: blue;
`;
const ContentContainer = styled.div`
  /* position: absolute; */
  display: flex;
  right: 0;
  /* width: 90%; */
  flex: 7 1 0;
  height: 100%;
  background-color: orange;
`;

// video
const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 7 1 0;
  height: 100%;
  background-color: black;
`;
const VideoMain = styled.div`
  width: 16%;
  height: 9%;
  background-color: red;
`;
const VideoSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 30%;
`;
const VideoSub = styled.div`
  width: 16%;
  height: 9%;
  background-color: orange;
`;

// menu
const MenuItemContainer = styled.div`
  flex: 2 1 0;
  width: 20%;
  height: 100%;
  background-color: blue;
`;
const MenuItemChatContainer = styled.div`
  width: 100%;
  height: 40%;
  background-color: whitesmoke;
`;
const MenuItemChangeContainer = styled.div`
  width: 100%;
  height: 60%;
  background-color: yellow;
`;

const Interview = () => {
  return (
    <Container>
      <MenuBarContainer />
      <ContainerS>
        <ContentContainer>
          {/* <ContentNull /> */}
          <VideoContainer>
            <VideoMain />
            <VideoSubContainer>
              <VideoSub />
              <VideoSub />
              <VideoSub />
              <VideoSub />
            </VideoSubContainer>
          </VideoContainer>
          <MenuItemContainer>
            <MenuItemChatContainer />
            <MenuItemChangeContainer />
          </MenuItemContainer>
        </ContentContainer>
      </ContainerS>
    </Container>
  );
};

export default Interview;
