import Main from './Main';
import renderer from "react-test-renderer";
import React from "react";


test('Main changes the class when hovered', () => {
        const component = renderer.create(
            <Main/>,
        );

        let form = component.toJSON();

        expect(form).toMatchSnapshot();
    }
)