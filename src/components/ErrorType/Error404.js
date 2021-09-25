import React, { Component } from 'react';
// modules
import styled from 'styled-components';

const ErrorPage404 = styled.div`
  background-color: #267ff7;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Error400 extends Component {
  render() {
    return <div>에러 404</div>;
  }
}

export default Error400;
