import React from 'react';

const SignupInput = (props) => {
  const mapData = props.mapData.map((index) => (
    <div key={index.id}>
      <input
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
