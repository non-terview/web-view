import React from 'react';

// modules
import styled from 'styled-components';

// Styles
const HeaderWrap = styled.div`
  width: 100%;
  height: 50px;
  background-color: red;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const HeaderLogo = styled.div`
  width: 100px;
  height: 20px;
  background-color: white;
`;

const HeaderMenuWrap = styled.div`
  margin-left: auto;
  width: 300px;
  height: 20px;
  background-color: midnightblue;
`;

export default function Header() {
  return (
    <HeaderWrap>
      <HeaderLogo />
      <HeaderMenuWrap>{/* 로그인, 로그아웃 등의 버튼 위치 */}</HeaderMenuWrap>
    </HeaderWrap>
  );
}
