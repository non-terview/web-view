// modules
import styled from 'styled-components';

// components
import Header from '../src/components/Header/Header';
import SignupInput from '../src/components/SignupForm/SignupInput';

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
      <Content>
        <SignupInput />
      </Content>
    </Container>
  );
}

export default App;
