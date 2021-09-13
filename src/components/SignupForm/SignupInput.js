import React, { useState } from 'react';

// hooks
import useInput from '../../hooks/useInput';

// styles
import styled from 'styled-components';
import Colors from '../../styles/Colors';

const SignInputWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

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

const SignupInput = () => {
  const [{ id, password, confirmPassword, name }, setText, inputReset] = useInput({ id: '', password: '', password: '', name: '' });

  // 모든 회원가입 절차가 정상적으로 진행되었을 경우 아래 userData에 저장후 redux에 저장
  const [userData, setUserData] = useState({ id: '', password: '', name: '' });

  return (
    <SignInputWrap>
      <SignInput name='id' placeholder='ID' type='text' value={id} onChange={setText}></SignInput>
      <SignInput name='password' placeholder='Password' type='text' value={password} onChange={setText}></SignInput>
      <SignInput name='confirmPassword' placeholder='Confirm Password' type='text' value={confirmPassword} onChange={setText}></SignInput>
      <SignInput name='name' placeholder='Your Name' type='text' value={name} onChange={setText}></SignInput>
    </SignInputWrap>
  );
};

export default SignupInput;
