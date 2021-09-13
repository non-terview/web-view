import React from 'react';
// modules
import styled from 'styled-components';

export default function Footer() {
  const FooterWrap = styled.div`
    background-color: skyblue;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return <FooterWrap>ⓒ ON-TERVIEW Corp.</FooterWrap>;
}
