import React from 'react';

import Main from './page/Main/Main';
import Login from './page/Login/Login';
import SignUp from './page/SignUp/SignUp';

import {Switch, Route} from 'react-router-dom';
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Template/Header/Header";

import {BrowserRouter} from 'react-router-dom';

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
                    <GlobalStyle/>
                    <Header/>
                    <Content>
                        <Switch>
                            <Route path="/" exact component={Main}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/sign-up" component={SignUp}/>
                        </Switch>
                    </Content>
                </Container>
            </BrowserRouter>
        </>
    );
}

export default App;
