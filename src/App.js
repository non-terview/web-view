// modules
import styled from 'styled-components';

// components
import Header from './components/Template/Header/Header';

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

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Content></Content>
    </Container>
  );
}

export default App;
