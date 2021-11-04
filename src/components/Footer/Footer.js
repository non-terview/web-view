import React from 'react';
// modules
import styled from 'styled-components';

const FooterWrap = styled.div`
  background-color: grey;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 9999;
`;

export default function Footer() {
  return <FooterWrap>ⓒ ON-TERVIEW Corp.</FooterWrap>;
}
