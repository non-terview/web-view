import React, {useState} from 'react';

import styled from 'styled-components';

import LoginInput from './LoginInput/LoginInput';
import Colors from "../../styles/Colors";


const FormWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ToggleButton = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  text-transform: uppercase;
  background-color: ${Colors.primaryColor};
  color: white;
  width: 180px;
  padding: 10px 40px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
`;

export default function LoginForm() {
    // 언어 설정
    const [lang] = useState('en');
    // 이메일, 비밀번호
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // 회사 정보
    const [company, setCompany] = useState('');
    // 사용자 / 회사
    const [isUser, setIsUser] = useState(true);

    const userMap = [
        {
            id: 1,
            placeholder: 'email',
            setter: setEmail,
            type: 'text',
            value: email
        },
        {
            id: 2,
            placeholder: 'password',
            setter: setPassword,
            type: 'password',
            value: password
        }
    ];

    const companyMap = [
        {
            id: 1,
            placeholder: 'email',
            setter: setEmail,
            type: 'text',
            value: email
        },
        {
            id: 2,
            placeholder: 'password',
            setter: setPassword,
            type: 'password',
            value: password
        },
        {
            id: 3,
            placeholder: 'company',
            setter: setCompany,
            type: 'text',
            value: company
        }
    ];

    function LoginInputView() {
        return isUser ? userMap : companyMap;
    }

    const langString = {
        ko: {
            email: '이메일',
            password: '비밀번호',
            company: '회사'
        },
        en: {
            email: 'email',
            password: 'password',
            company: 'company'
        }
    };

    return (
        <FormWrap>
            <LoginInput lang={lang} langString={langString} loginMap={LoginInputView()}/>
            <ToggleButton
                type='button'
                onClick={() => {
                    setIsUser(!isUser);
                }}
                value={isUser ? '회사 로그인으로 전환' : '개인 사용자 로그인으로 전환'}
            />
        </FormWrap>
    );
}
