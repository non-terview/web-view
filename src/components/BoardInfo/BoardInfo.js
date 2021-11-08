import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';

const BoardInfoWrap = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
//제목아래 NAV
const BoardInfoTopNav = styled.div`
  width: 100%;
  height: 80px;
  background-color: #f2f9da;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//지원하기 버튼 등의 NAV
const BoardInfoMiddleNav = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f2f9da;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//모집조건 및 근무조건 내용
const BoardInfoRecruit = styled.div`
  width: 100%;
  height: 150px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//게시판 내용이 들어가는 부분
const BoardInfoContent = styled.div`
  width: 100%;
  height: 150px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class BoardInfo extends Component {
  render() {
    return (
      <div>
        <table border='1'>
          <thead>
            <tr>
              <th colSpan='3' width='700px'>
                <BoardInfoWrap>제목이 들어갈 자리입니다.</BoardInfoWrap>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan='3'>
                <BoardInfoTopNav>{'BoardInfo 제목아래 Nav부분'}</BoardInfoTopNav>
              </td>
            </tr>
            <tr>
              <th colSpan='2' width='370px' height='50px' bgcolor='white'>
                모집조건 및 근무조건
              </th>
              <td rowSpan='2'>
                <BoardInfoMiddleNav>{'두번째 NAV 버튼(지원하기 버튼 등)'}</BoardInfoMiddleNav>
              </td>
            </tr>
            <tr>
              <td>
                <BoardInfoRecruit>{'모집조건 및 근무조건 내용'}</BoardInfoRecruit>
              </td>
            </tr>
            <tr>
              <td colSpan='3'>
                <BoardInfoContent>내용이 들어가는 부분입니다.</BoardInfoContent>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default BoardInfo;
