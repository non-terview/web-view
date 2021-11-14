import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectMenuState } from '../../redux/Interview/MenuStateSlice';

import ColorPalette from './InterviewColor';

// MenuComponents
import ManagerChat from './Menu/ManagerChat';

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
  background-color: #ffd45e;
`;
const MenuItemBottomContainer = styled.div`
  width: 100%;
  height: 60%;
  background-color: ${ColorPalette.MenuItemBottomColor};
`;

// resume, self, managerChat, table, test
// MenuItem
const MenuItem = () => {
  let menu = {
    managerChat: <ManagerChat />
  };

  const menuState = useSelector(selectMenuState);
  useEffect(() => {}, [menuState]);

  return (
    <MenuItemContainer>
      <MenuItemTopContainer />
      <MenuItemBottomContainer>{menu[menuState]}</MenuItemBottomContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
