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
      <path d='M22,10v8h-2v-8H22z M20,20v2h2v-2H20z M18,17.29C16.53,18.95,14.39,20,12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8v9 l7.55-7.55C17.72,3.34,15.02,2,12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10c2.25,0,4.33-0.74,6-2V17.29z' />
    </SvgIcon>
  );
}
class Error404 extends Component {
  render() {
    return (
      <ErrorWrap>
        <SVGErrorIcon style={{ fontSize: '9rem', color: '#3367FF' }} />
        <div>
          <h2>Error (404)</h2>
          <Ptag>죄송합니다.</Ptag>
          <Ptag>찾을 수 없는 페이지입니다.</Ptag>
        </div>
      </ErrorWrap>
    );
  }
}

export default Error404;
