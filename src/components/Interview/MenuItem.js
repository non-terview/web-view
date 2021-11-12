import React from 'react';
import styled from 'styled-components';

import ColorPalette from './InterviewColor';

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

// MenuItem
const MenuItem = () => {
  return (
    <MenuItemContainer>
      <MenuItemTopContainer />
      <MenuItemBottomContainer />
    </MenuItemContainer>
  );
};

export default MenuItem;
