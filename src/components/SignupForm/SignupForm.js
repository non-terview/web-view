import React, { useState } from 'react';
import styled from 'styled-components';

// components
import SignupInput from './SignupInput';

// hooks
import useInput from '../../hooks/useInput';

import Colors from '../../styles/Colors';

const FormWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ToggleButton = styled.div`
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

const initialValue = { email: '', password: '', confirmPassword: '', name: '', company: '' };

const Signup = (props) => {
  const [{ email, password, confirmPassword, name, company }, setInput, inputReset] = useInput(initialValue);

  // 일반유저, 회사 설정 -> 후에 버튼도 개별적인 컴포넌트로 뺄 예정
  const [isUser, setIsUser] = useState(true);

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
    <FormWrap>
      <SignupInput mapData={SignupInputView()} />
      <ToggleButton
        onClick={() => {
          setIsUser(!isUser);
          inputReset();
        }}
      >
        {isUser ? '회사 가입' : '일반 가입'}
      </ToggleButton>
    </FormWrap>
  );
};

export default Signup;
