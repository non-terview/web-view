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
      <path d='M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z' />
    </SvgIcon>
  );
}
class Error500 extends Component {
  render() {
    return (
      <ErrorWrap>
        <SVGErrorIcon style={{ fontSize: '9rem', color: '#3367FF' }} />
        <div>
          <h2>Error (500)</h2>
          <Ptag>죄송합니다.</Ptag>
          <Ptag>내부 서버 오류입니다!</Ptag>
        </div>
      </ErrorWrap>
    );
  }
}

export default Error500;
