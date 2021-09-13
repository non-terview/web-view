import React from 'react';
import {useState} from "react";

function emailValidate(setEmail, email, event) {
    setEmail(event.target.value);
}

function passwordValidate(setEmail, email, event) {
    setEmail(event.target.value);
}

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [lang] = useState("ko");

    const langString =
        {
            ko: {
                email: "이메일", password: "비밀번호"
            },
            en: {
                email: "email", password: "password"
            }
        };


    return (
        <>
            <input type="text" placeholder={langString[lang].email} onChange={(event) =>
                emailValidate(setEmail, email, event)} value={email}>
            </input>
            <h1>{email}</h1>
            <input type="password" placeholder={langString[lang].password} onChange={(event =>
                passwordValidate(setPassword, email, event))}>
            </input>
            <h1>{password}</h1>

        </>
    );
}

export default LoginForm;
