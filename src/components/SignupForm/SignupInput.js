import React from 'react';

import Colors from '../../styles/Colors';
import styled from 'styled-components';

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

const SignupInput = (props) => {
  const mapData = props.mapData.map((index) => (
    <div key={index.id}>
      <SignInput
        key={index.id}
        placeholder={index.placeholder}
        name={index.name}
        value={index.value}
        onChange={index.setter}
      />
    </div>
  ));

  return <div>{mapData}</div>;
};

export default SignupInput;
