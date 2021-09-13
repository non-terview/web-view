// modules
import { Component } from 'react';
import styled from 'styled-components';

// components
import Header from '../src/components/Template/Header/Header';
import Boardlist from './components/Boardlist/Boardlist.js';
import Footer from '../src/components/Footer/Footer';


// styles
import GlobalStyle from './styles/GlobalStyle';
import LoginForm from "./components/LoginForm/LoginForm";

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  z-index: -99;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: aqua;
  /* padding: 20px; */
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Content>
          <Boardlist />
          <LoginForm/>
      </Content>
      <Footer />
    </Container>
  );
}

export default App;
