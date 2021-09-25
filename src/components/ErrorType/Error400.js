import React, { Component } from 'react';

import styled from 'styled-components';

const ErrorPage400 = styled.div`
  height: 650px;
  font-size: 60px;
  font-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Error400 extends Component {
  render() {
    return (
      <div>
        <ErrorPage400>
          Error (400)
          <br />
          잘못된 형식의 요청입니다!
        </ErrorPage400>
      </div>
    );
  }
}

export default Error400;
