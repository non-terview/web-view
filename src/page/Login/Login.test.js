import Login from './Login';
import React from "react";
import { render } from "@testing-library/react";
import { useSelector } from 'react-redux';

jest.mock( 'react-redux' );


test( 'Login changes the class when hovered', () => {
    const tasks = [];

    useSelector.mockImplementation( ( selector ) => selector( {
      tasks,
    } ) );

    const { getByText } = render(
      <Login/>,
    );

    expect( getByText( '이메일' ) ).not.toBeNull();
    expect( getByText( '비밀번호' ) ).not.toBeNull();
    expect( getByText( '회사 로그인으로 전환' ) ).not.toBeNull();
    expect( getByText( '이메일' ) ).toMatchSnapshot();
  }
)