// modules
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Template/Header/Header';
import Footer from './components/Footer/Footer';
// import StateIcon from './components/StateIcon/StateIcon';

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
              <Route path='/boards/board/reference-tables/table_num' component={ScoreCard} />
              <Route path='/boards/board/schedule' component={Calendar} />
              <Route path='/board' component={Board} />
              <Route path='/company/user/info' component={CompanyInfo} />
              <Route path='/mocktest' component={MockTestPage} />
            </Switch>
          </Content>
          <Footer />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
