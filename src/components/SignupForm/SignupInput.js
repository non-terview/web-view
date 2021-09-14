import React, { useState } from 'react';

// hooks
import useInput from '../../hooks/useInput';

// styles
import styled from 'styled-components';
import Colors from '../../styles/Colors';

const SignupForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const SignInputWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SignInputLabel = styled.label``;
const SignInput = styled.input`
  width: 180px;
  padding: 7px 10px;
  border: none;
  border-bottom: 1px solid ${Colors.colorGrey};
  margin-bottom: 20px;
  transition: 0.3s ease-in-out;
  &:focus {
    border-bottom: 1px solid ${Colors.primaryColor};
  }
`;

const SignSubmit = styled.input``;

const SignupInput = () => {
  const [{ id, password, confirmPassword, name }, setText, inputReset] = useInput({ id: '', password: '', confirmPassword: '', name: '' });

  // 모든 회원가입 절차가 정상적으로 진행되었을 경우 아래 userData에 저장후 redux에 저장
  const [userData, setUserData] = useState({ id: '', password: '', name: '' });

  const onSubmit = (e) => {
    console.log(checkPassword());
  };

  const checkPassword = () => {
    if (password !== confirmPassword) {
      return false;
    }
    return true;
  };

  return (
    <SignupForm>
      <InputComponent name={`id`} placeholder={`ID`} type={`text`} value={id} onChange={setText} labelText={`아이디`} />
      <InputComponent name={`password`} placeholder={`Password`} type={`password`} value={password} onChange={setText} labelText={`비밀번호`} />
      <InputComponent name={`confirmPassword`} placeholder={`Confirm Password`} type={`password`} value={confirmPassword} onChange={setText} labelText={`비밀번호 확인`} />
      <InputComponent name={`name`} placeholder={`Your Name`} type={`text`} value={name} onChange={setText} labelText={`이름`} />
      <SignSubmit type={`submit`}></SignSubmit>
    </SignupForm>
  );
};

const InputComponent = ({ name, type, value, placeholder, onChange, labelText }) => {
  return (
    <SignInputWrap>
      <SignInputLabel>{labelText}</SignInputLabel>
      <SignInput required name={name} placeholder={placeholder} type={type} value={value} onChange={onChange}></SignInput>
    </SignInputWrap>
  );
};

export default SignupInput;
