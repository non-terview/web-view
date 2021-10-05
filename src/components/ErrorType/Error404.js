import React, { Component } from 'react';

import styled from 'styled-components';

const ErrorWrap = styled.div`
  height: 650px;
  font-size: 40px;
  font-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Ptag = styled.div`
  font-size: 20px;
`;

class Error404 extends Component {
  render() {
    return (
      <div>
        <ErrorWrap>
          <div>
            <h2>Error (404)</h2>
            <Ptag>죄송합니다.</Ptag>
            <Ptag>현재 찾을 수 없는 페이지를 요청 하셨습니다.</Ptag>
          </div>
        </ErrorWrap>
      </div>
    );
  }
}

export default Error404;
