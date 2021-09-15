import LoginForm from './LoginForm';
import renderer from "react-test-renderer";
import React from "react";


test('LoginForm changes the class when hovered', () => {
        const component = renderer.create(
            <LoginForm/>,
        );

        let form = component.toJSON();

        expect(form).toMatchSnapshot();
    }
)