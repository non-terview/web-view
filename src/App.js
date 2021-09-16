// modules
import styled from 'styled-components';

// components
import Header from '../src/components/Template/Header/Header';
import Footer from '../src/components/Footer/Footer';
import SignupForm from './components/SignupForm/SignupForm';


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
  /* background-color: aqua; */
  /* padding: 20px; */
`;

function App() {
    return (
        <Container>
            <GlobalStyle />
            <Header />
            <Content>
                <LoginForm />
                {/* <SignupInput /> */}
                <SignupForm />
                {/* <SignupForm /> */}
            </Content>
            <Footer />
        </Container>
    );
}

export default App;
