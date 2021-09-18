import SignUp from './SignUp';
import renderer from "react-test-renderer";
import React from "react";


test('SignUp changes the class when hovered', () => {
        const component = renderer.create(
            <SignUp/>,
        );

        let form = component.toJSON();

        expect(form).toMatchSnapshot();
    }
)