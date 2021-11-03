import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

import axios from 'axios';

// components
import SignupInput from './SignupInput';

// hooks
import useInput from '../../hooks/useInput';

const FormWrap = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
`;

const initialValue = { email: '', password: '', confirmPassword: '', name: '', company: '' };

const SignupForm = (props) => {
  const [{ email, password, confirmPassword, name, company }, setInput, inputReset] = useInput(initialValue);

  // 일반유저, 회사 설정 -> 후에 버튼도 개별적인 컴포넌트로 뺄 예정
  const [isUser, setIsUser] = useState(true);

  const signUp = async () => {
    if (password !== confirmPassword) {
      console.error('not confirm');
      return;
    }
    // 일치했을 경우 POST ->
    const { data: token } = await axios.get('/api/user/token');
    await axios
      .post('/api/user', {
        username: email,
        password: password,
        name: name,
        auth: 'ROLE_USER',
        type: 'USER',
        _csrf: token.token.token
        //
      })
      .then((r) => {
        console.log(r);
      })
      .catch((res) => {
        console.error('err');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp().then((r) => {
      console.log(r);
    });
  };

  const userMap = [
    {
      id: 1,
      placeholder: 'email',
      type: 'text',
      name: 'email',
      value: email,
      setter: setInput
    },
    {
      id: 2,
      placeholder: 'password',
      type: 'password',
      name: 'password',
      value: password,
      setter: setInput
    },
    {
      id: 3,
      placeholder: 'confirmPassword',
      type: 'password',
      name: 'confirmPassword',
      value: confirmPassword,
      setter: setInput
    },
    {
      id: 4,
      placeholder: 'name',
      type: 'text',
      name: 'name',
      value: name,
      setter: setInput
    }
  ];

  const companyMap = [
    {
      id: 1,
      placeholder: 'email',
      type: 'text',
      name: 'email',
      value: email,
      setter: setInput
    },
    {
      id: 2,
      placeholder: 'password',
      type: 'password',
      name: 'password',
      value: password,
      setter: setInput
    },
    {
      id: 3,
      placeholder: 'confirmPassword',
      type: 'password',
      name: 'confirmPassword',
      value: confirmPassword,
      setter: setInput
    },
    {
      id: 4,
      placeholder: 'name',
      type: 'text',
      name: 'name',
      value: name,
      setter: setInput
    },
    {
      id: 5,
      placeholder: 'company',
      type: 'text',
      name: 'company',
      value: company,
      setter: setInput
    }
  ];

  function SignupInputView() {
    return isUser ? userMap : companyMap;
  }

  return (
    <FormWrap onSubmit={handleSubmit}>
      <SignupInput mapData={SignupInputView()} />
      <ButtonContainer>
        <Button
          variant='outlined'
          type='button'
          onClick={() => {
            setIsUser(!isUser);
            inputReset();
          }}
        >
          {isUser ? '회사 가입으로 전환' : '일반 가입으로 전환'}
        </Button>
        <Button type='submit' variant='outlined' color='primary'>
          가입하기
        </Button>
      </ButtonContainer>
    </FormWrap>
  );
};

export default SignupForm;
