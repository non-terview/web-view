import React, { Component } from 'react';

import styled from 'styled-components';

const ErrorPage500 = styled.div`
  height: 650px;
  font-size: 60px;
  font-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Error500 extends Component {
  render() {
    return (
      <div>
        <ErrorPage500>
          Error (500)
          <br />
          내부 서버 오류입니다!
        </ErrorPage500>
      </div>
    );
  }
}

export default Error500;
