import React from 'react';
import styled from "styled-components";
import Colors from "../../../styles/Colors";


const SignInput = styled.input`
  width: 180px;
  padding: 7px 10px;
  border: none;
  border-bottom: 1px solid ${Colors.colorGrey};
  margin-top: 20px;
  transition: 0.3s ease-in-out;

  &:focus {
    border-bottom: 1px solid ${Colors.primaryColor};
  }
`;

function valueSetter(setter, event) {
    setter(event.target.value);
}


function LoginForm(props) {

    const langString = props.langString;
    const lang = props.lang;
    const loginMap = props.loginMap
        .map((val) =>
            <div key={"div_" + val["id"]}>
                <SignInput key={"input_" + val["id"]} type={val["type"]}
                           placeholder={langString[lang][val["placeholder"]]}
                           onChange={
                               event =>
                                   valueSetter(val["setter"], event)
                           }
                           value={val["value"]}>
                </SignInput>
                <h1 key={"h1_" + val["id"]}>{val["value"]}</h1>
            </div>
        );

    return (
        <div>
            {loginMap}
        </div>
    );
}

export default LoginForm;
