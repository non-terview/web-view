import renderer from "react-test-renderer";
import React from "react";
import LoginInput from "./LoginInput";

test('LoginInput changes the class when hovered', () => {
        const component = renderer.create(
            <LoginInput/>,
        );

        let form = component.toJSON();

        expect(form).toMatchSnapshot();
    }
)