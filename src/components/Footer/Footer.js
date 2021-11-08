import React from 'react';
// modules
import styled from 'styled-components';

const FooterWrap = styled.div`
  background-color: skyblue;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {


    return <FooterWrap>ⓒ ON-TERVIEW Corp.</FooterWrap>;
}
