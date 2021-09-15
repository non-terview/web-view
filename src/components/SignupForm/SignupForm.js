import React, { useState } from 'react';

import useInput from '../../hooks/useInput';

// components
import SignupInput from './SignupInput';

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
    <div>
      <SignupInput mapData={SignupInputView()} />
      <button
        onClick={() => {
          setIsUser(!isUser);
          inputReset();
        }}
      >
        {isUser ? '회사 가입으로 전환' : '일반 유저 가입으로 전환'}
      </button>
    </div>
  );
};

export default Signup;
