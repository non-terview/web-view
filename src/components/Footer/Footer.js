import React from 'react';
// modules
import styled from 'styled-components';

const FooterWrap = styled.div`
  background-color: grey;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default function Footer() {
  return <FooterWrap>ⓒ ON-TERVIEW Corp.</FooterWrap>;
}
