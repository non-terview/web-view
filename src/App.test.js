import App from "./App";
import React from "react";
import { render } from "@testing-library/react";
import { useSelector } from 'react-redux';

jest.mock( 'react-redux' );

test( 'App changes the class when hovered', () => {


    useSelector.mockImplementationOnce( () => ( { dataready: true } ) )

    const { getByText } = render(
      <App/>,
    );

    expect( getByText( '참여' ) ).not.toBeNull();
    expect( getByText( 'ⓒ ON-TERVIEW Corp.' ) ).toMatchSnapshot();
  }
)