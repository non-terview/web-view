import React from "react";
import renderer from 'react-test-renderer';
import App from "./App";

test('App changes the class when hovered', () => {
        const component = renderer.create(
            <App/>,
        );


        let app = component.toJSON();

        expect(app).toMatchSnapshot();
    }
)