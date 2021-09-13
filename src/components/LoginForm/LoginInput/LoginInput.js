import React from 'react';

function valueSetter(setter, event) {
    setter(event.target.value);
}


function LoginForm(props) {

    const langString = props.langString;
    const lang = props.lang;
    const loginMap = props.loginMap
        .map((val) =>
            <div key={"div_"+val["id"]}>
                <input key={"input_" + val["id"]} type={val["type"]}
                       placeholder={langString[lang][val["placeholder"]]}
                       onChange={
                           event =>
                               valueSetter(val["setter"], event)
                       }
                       value={val["value"]}>
                </input>
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
