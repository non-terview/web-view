import React, { useState } from 'react';
import { Component } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import styled from 'styled-components';

const SearchField = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputPosition = styled.div`
  margin: 15px 10px;
`;

export default function BoardSearch() {
  const [companyname, setCompanyName] = useState('');
  const companyName = (e) => {
    const {
      target: { value }
    } = e;
    setCompanyName(value);
  };

  const [checked, setChecked] = useState(false);
  const CheckChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <form method='GET'>
        <SearchField>
          <fieldset style={{ width: '500px' }}>
            <legend>검색</legend>
            <InputPosition>
              기업명 : <input type='text' id='companyname' name='companyname' value={companyname} placeholder='기업명을 입력해주세요.' onChange={companyName}></input>
              <button type='submit'>검색</button>
              <br />
              <label>
                A1 <input type='checkbox' id='A' checked={checked} onChange={CheckChange}></input>
                A2 <input type='checkbox' id='B' checked={checked} onChange={CheckChange}></input>
              </label>
            </InputPosition>
          </fieldset>
        </SearchField>
      </form>
    </div>
  );
}
