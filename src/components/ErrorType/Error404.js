import React, { Component } from 'react';

import styled from 'styled-components';

const ErrorPage404 = styled.div`
  height: 650px;
  font-size: 60px;
  font-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Error404 extends Component {
  render() {
    return (
      <div>
        <ErrorPage404>
          Error (404)
          <br />
          존재하지 않는 URL입니다!
        </ErrorPage404>
      </div>
    );
  }
}

export default Error404;
