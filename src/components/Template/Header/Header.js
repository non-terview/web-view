import React from 'react';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectUserInfo } from '../../../redux/User/LoginUserSlice'

// modules
import styled from 'styled-components';

// Styles
const HeaderWrap = styled.div`
  width: 100%;
  height: 50px;
  background-color: pink;
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
  background-color: white;
`;
const handleHeaderInfo = (e) => {

}
const Header = () => {
  const userInfo = useSelector(selectUserInfo);


  useEffect(() => {
    handleHeaderInfo();
  });

  return (
    <HeaderWrap>
      <HeaderLogo/>
      <HeaderMenuWrap>
        {userInfo.id === -1 ? "로그인이 필요합니다." : userInfo.name+"님, 로그인하였습니다."}
        {/* 로그인, 로그아웃 등의 버튼 위치 */ }
      </HeaderMenuWrap>
    </HeaderWrap>
  );
}

export default Header;
