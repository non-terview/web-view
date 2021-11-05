import React from 'react';
// import Colors from '../../styles/Colors';
import styled from 'styled-components';

import TextField from '@mui/material/TextField';

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 600px;
`;

const InputField = styled(TextField)`
  margin-top: 5px;
  width: 100;
`;

const SignupInput = (props) => {
  const mapData = props.mapData.map((index) => (
    <InputWrap key={index.id}>
      {/* <SignInput
        key={index.id}
        placeholder={index.placeholder}
        name={index.name}
        value={index.value}
        onChange={index.setter}
      /> */}
      <InputField
        fullWidth
        type={index.type}
        label={index.name}
        variant='standard'
        required
        key={index.id}
        placeholder={index.placeholder}
        name={index.name}
        value={index.value}
        onChange={index.setter}
      />
    </InputWrap>
  ));

  return <div>{mapData}</div>;
};

export default SignupInput;
