import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';

const BoardNumber = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoardRegion = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoardTitle = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoardWriteData = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoardClosingDate = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class BoardList extends Component {
  render() {
    return (
      <div>
        <table border='1'>
          <thead>
            <tr>
              <th width='60px'>
                <BoardNumber>글 번호</BoardNumber>
              </th>
              <th width='150px'>
                <BoardRegion>지역</BoardRegion>
              </th>
              <th width='400px'>
                <BoardTitle>기업명/제목</BoardTitle>
              </th>
              <th width='100px'>
                <BoardWriteData>작성날짜</BoardWriteData>
              </th>
              <th width='100px'>
                <BoardClosingDate>마감일</BoardClosingDate>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width='60px'>
                <BoardNumber>1</BoardNumber>
              </td>
              <td width='150px'>
                <BoardRegion>지역</BoardRegion>
              </td>
              <td width='400px'>
                <BoardTitle>기업명/제목</BoardTitle>
              </td>
              <td width='100px'>
                <BoardWriteData>작성날짜</BoardWriteData>
              </td>
              <td width='100px'>
                <BoardClosingDate>마감일</BoardClosingDate>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default BoardList;
