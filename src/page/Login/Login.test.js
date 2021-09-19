import Login from './Login';
import renderer from "react-test-renderer";
import React from "react";


test('Login changes the class when hovered', () => {
        const component = renderer.create(
            <Login/>,
        );

        let form = component.toJSON();

        expect(form).toMatchSnapshot();
    }
)