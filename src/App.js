import React from 'react';

import Main from './page/Main/Main';
import Login from './page/Login/Login';
import SignUp from './page/SignUp/SignUp';
import ScoreCard from './page/ScoreCard/ScoreCard';
import ErrorPage400 from './page/Error_page/ErrorPage400';
import ErrorPage404 from './page/Error_page/ErrorPage404';
import ErrorPage500 from './page/Error_page/ErrorPage500';
import Calendar from './page/ScheduleCalendar/ScheduleCalendar';
import Board from './page/Board/Board';
import CompanyInfo from './page/CompanyInfo/CompanyInfo';
import MockTestPage from './page/MockTest/MockTestPage';
import BoardDetailScreen from './page/BoardDetailScreen/BoardDetailScreen';

import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Template/Header/Header';
import Footer from './components/Footer/Footer';
import Interview from './components/Interview/Interview';
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

const InterviewRoute = () => (
  <Content>
    <Interview />
  </Content>
);

const MainRoute = () => (
  <Content>
    <Header />
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
      <Route path='/BoardDetail' component={BoardDetailScreen} />

      <Route path='/company/user/info' component={CompanyInfo} />
      <Route path='/mocktest' component={MockTestPage} />
      {/* <Route path='/interview' component={Interview} /> */}
    </Switch>
    {/* <Footer /> */}
  </Content>
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <GlobalStyle />
          <Switch>
            <Route path='/interview' exact component={InterviewRoute} />
            <Route path='/' component={MainRoute} />
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
