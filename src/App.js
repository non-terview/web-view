import React from 'react';

import Main from './page/Main/Main';
import Login from './page/Login/Login';
import SignUp from './page/SignUp/SignUp';
import ErrorPage400 from './page/Error_page/ErrorPage400';
import ErrorPage404 from './page/Error_page/ErrorPage404';
import ErrorPage500 from './page/Error_page/ErrorPage500';

import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Template/Header/Header';
import Footer from './components/Footer/Footer';

import { BrowserRouter } from 'react-router-dom';

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
    <>
      <BrowserRouter>
        <Container>
          <GlobalStyle />
          <Header />
          <Content>
            <Switch>
              <Route path='/' exact component={Main} />
              <Route path='/login' component={Login} />
              <Route path='/sign-up' component={SignUp} />
              <Route path='/errors/400' component={ErrorPage400} />
              <Route path='/errors/404' component={ErrorPage404} />
              <Route path='/errors/500' component={ErrorPage500} />
            </Switch>
          </Content>
          <Footer />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
