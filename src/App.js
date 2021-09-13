// modules
import { Component } from 'react';
import styled from 'styled-components';

// components
import Header from '../src/components/Template/Header/Header';
import Boardlist from './components/Boardlist/Boardlist.js';

// styles
import GlobalStyle from './styles/GlobalStyle';

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

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Content>
          <Header />
          <Boardlist />
        </Content>
      </Container>
    );
  }
}

export default App;
