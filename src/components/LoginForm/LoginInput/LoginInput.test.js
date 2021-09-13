import renderer from "react-test-renderer";
import React from "react";
import LoginInput from "./LoginInput";

test('LoginInput changes the class when hovered', () => {
        const lang = "ko";
        const langString = {
            ko: {
                email: "이메일", password: "비밀번호", company: "회사"
            },
            en: {
                email: "email", password: "password", company: "company"
            }
        };
        const myMock = jest.fn();
        const userMap = [
            {
                "id": 1,
                "placeholder": 'email',
                "setter": myMock(),
                "type": "text",
                "value": "A"
            },
            {
                "id": 2,
                "placeholder": 'password',
                "setter": myMock(),
                "type": "password",
                "value": "A"
            },
            {
                "id": 3,
                "placeholder": 'company',
                "setter": myMock(),
                "type": "text",
                "value": "A"
            }
        ];
        const component = renderer.create(
            <LoginInput lang={lang} langString={langString}
                        loginMap={userMap}/>,
        );

        let form = component.toJSON();

        expect(form).toMatchSnapshot();
    }
)