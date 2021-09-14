// modules
import { Component } from 'react';
import styled from 'styled-components';

// components
import Header from '../src/components/Template/Header/Header';
import Boardlist from '../src/components/Boardlist/Boardlist';
import Footer from '../src/components/Footer/Footer';
import BoardInfo from '../src/components/BoardInfo/BoardInfo';

// styles
import GlobalStyle from './styles/GlobalStyle';
import LoginForm from './components/LoginForm/LoginForm';

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
        <BoardInfo />
        <Boardlist />
        <LoginForm />
      </Content>
      <Footer />
    </Container>
  );
}

export default App;
