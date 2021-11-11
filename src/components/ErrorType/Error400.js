import React, { Component } from 'react';

import styled from 'styled-components';
import SvgIcon from '@material-ui/core/SvgIcon';

const ErrorWrap = styled.div`
  height: 650px;
  font-size: 40px;
  font-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ptag = styled.p`
  font-size: 20px;
`;

function SVGErrorIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d='M3 12c0 2.21.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24C5.68 15.15 5 13.66 5 12c0-2.61 1.67-4.83 4-5.65V4.26C5.55 5.15 3 8.27 3 12zm8 5h2v-2h-2v2zM21 4h-6v6l2.24-2.24C18.32 8.85 19 10.34 19 12c0 2.61-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74 0-2.21-.91-4.2-2.36-5.64L21 4zm-10 9h2V7h-2v6z' />
    </SvgIcon>
  );
}

class Error400 extends Component {
  render() {
    return (
      <ErrorWrap>
        <SVGErrorIcon style={{ fontSize: '12rem', color: '#3367FF' }} />
        <div>
          <h2>Error (400)</h2>
          <Ptag>죄송합니다.</Ptag>
          <Ptag>잘못된 형식의 요청입니다!</Ptag>
        </div>
      </ErrorWrap>
    );
  }
}

export default Error400;
