import React, { useEffect, useState } from 'react';
import { Component } from 'react';
import styled from 'styled-components';

const SearchField = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputPosition = styled.div`
  margin: 10px 25px;
`;

export default function BoardSearch() {
  //텍스트 value값 변경
  const [companyname, setCompanyName] = useState('');
  const companySearch = (e) => {
    setCompanyName(e.target.value);
  };

  //체크박스 개별선택
  const [checkValue, setCheckValue] = useState([]);

  useEffect(() => {
    const checkValue = [
      { id: 'A1', name: 'A1', value: 'A1' },
      { id: 'A2', name: 'A2', value: 'A2' },
      { id: 'A3', name: 'A3', value: 'A3' }
    ];
    setCheckValue(
      checkValue.map((v) => {
        return {
          select: false,
          id: v.id,
          name: v.name,
          value: v.value
        };
      })
    );
  }, []);

  return (
    <div>
      <SearchField>
        <form method='GET'>
          <fieldset style={{ width: '300px' }}>
            <legend>검색</legend>
            <InputPosition>
              기업명 : <input type='text' id='companyname' name='companyname' value={companyname} placeholder='기업명을 입력해주세요.' onChange={companySearch}></input>
              <button type='submit'>검색</button>
              <br />
              <br />
              {checkValue.map((v) => (
                <div key={v.id}>
                  {v.value}
                  <input
                    type='checkbox'
                    checked={v.select}
                    onChange={(e) => {
                      const check = e.target.checked;
                      setCheckValue(
                        checkValue.map((data) => {
                          if (v.id === data.id) {
                            data.select = check;
                            console.log(data.id);
                          }
                          return data;
                        })
                      );
                    }}
                  ></input>
                </div>
              ))}
            </InputPosition>
          </fieldset>
        </form>
      </SearchField>
    </div>
  );
}
