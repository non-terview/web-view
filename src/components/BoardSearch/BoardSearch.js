import React, { Fragment, useEffect, useState } from 'react';
import { Component } from 'react';
import styled from 'styled-components';

const SearchField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputPosition = styled.div`
  margin: 10px 25px;
`;

const ButtonPosition = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function BoardSearch() {
  //텍스트 value값 변경
  const [companyname, setCompanyName] = useState('');
  const companySearch = (e) => {
    setCompanyName(e.target.value);
  };

  //체크박스
  const [checkValueA, setCheckValueA] = useState([]);

  useEffect(() => {
    const checkValueA = [
      { id: 'A1', name: 'A1', value: 'A1' },
      { id: 'A2', name: 'A2', value: 'A2' },
      { id: 'A3', name: 'A3', value: 'A3' },
      { id: 'A4', name: 'A4', value: 'A4' },
      { id: 'B1', name: 'B1', value: 'B1' },
      { id: 'B2', name: 'B2', value: 'B2' },
      { id: 'B3', name: 'B3', value: 'B3' },
      { id: 'B4', name: 'B4', value: 'B4' }
    ];
    setCheckValueA(
      checkValueA.map((v) => {
        return {
          select: false,
          id: v.id,
          name: v.name,
          value: v.value
        };
      })
    );
  }, []);

  //input 초기화
  const resetButton = () => {
    setCompanyName('');
  };

  return (
    <div>
      <SearchField>
        <form method='GET'>
          <fieldset style={{ width: '310px' }}>
            <legend>검색</legend>
            <InputPosition>
              기업명 : <input type='text' id='companyname' name='companyname' value={companyname} placeholder='기업명을 입력해주세요.' onChange={companySearch}></input>
              <div>
                <br />
                {checkValueA.map((v) => (
                  <Fragment key={v.id}>
                    {v.value}
                    <input
                      type='checkbox'
                      checked={v.select}
                      onChange={(e) => {
                        const checkA = e.target.checked;
                        setCheckValueA(
                          checkValueA.map((dataA) => {
                            if (v.id === dataA.id) {
                              //체크박스 선택하게 되면 checkA의 값이 true로 바뀌면서 data.select(false)의 값이 true로 바뀐다.
                              dataA.select = checkA;
                              console.log(dataA.id);
                              console.log(dataA.select);
                            }
                            return dataA;
                          })
                        );
                      }}
                    ></input>
                  </Fragment>
                ))}
              </div>
              <ButtonPosition>
                <button type='submit'>검색</button>
                &nbsp; &nbsp;
                <button onClick={resetButton}>초기화</button>
              </ButtonPosition>
            </InputPosition>
          </fieldset>
        </form>
      </SearchField>
    </div>
  );
}
