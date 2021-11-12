import React from 'react';
import styled from 'styled-components';

import ColorPalette from './InterviewColor';

const SideBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: ${ColorPalette.Sidebar};
  padding: 5px;
  width: 10%;
  min-width: 100px;
  height: 100%;
  z-index: 99;
  transition: 0.2s ease-in-out;
  &:hover {
    width: 15%;
    min-width: 200px;
  }
`;
const SidebarIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SidebarIconStyle = styled.div`
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
const SidebarIconDes = styled.span`
  font-size: 18px;
  margin-top: 5px;
  color: white;
  opacity: 0;
  transition: 0.2s ease-in-out;
  ${SideBarContainer}:hover & {
    opacity: 1;
  }
`;

const Sidebar = () => {
  return (
    <SideBarContainer>
      <SideBarIcon text='이력서' />
      <SideBarIcon text='자기소개서' />
      {/* 아래 3개의 컴포넌트는 면접관만 사용 가능 */}
      <SideBarIcon text='매니저채팅' />
      <SideBarIcon text='평가표' />
      <SideBarIcon text='test' />
    </SideBarContainer>
  );
};
const SideBarIcon = ({ text }) => {
  return (
    <SidebarIconContainer>
      <SidebarIconStyle />
      <SidebarIconDes>{text}</SidebarIconDes>
    </SidebarIconContainer>
  );
};

export default Sidebar;
