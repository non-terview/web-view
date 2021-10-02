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
  const [checkValue, setCheckValue] = useState([]);

  useEffect(() => {
    const checkValue = [
      { id: 'A1', name: 'A1', value: 'A1' },
      { id: 'A2', name: 'A2', value: 'A2' },
      { id: 'A3', name: 'A3', value: 'A3' },
      { id: 'A4', name: 'A4', value: 'A4' },
      { id: 'B1', name: 'B1', value: 'B1' },
      { id: 'B2', name: 'B2', value: 'B2' },
      { id: 'B3', name: 'B3', value: 'B3' },
      { id: 'B4', name: 'B4', value: 'B4' }
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

  //form reset
  //혼자 했던 방법은 select:false 하면 체크박스 한개빼고 다 사라지면서 false로 바꼈는데 spread연산자로 해결
  const formReset = (e) => {
    setCompanyName('');
    const newCheckValue = { ...checkValue, select: false };
    console.log(newCheckValue);
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
                {checkValue.map((v, i) => (
                  <Fragment key={v.id}>
                    {v.value}
                    <input
                      type='checkbox'
                      checked={v.select}
                      onChange={(e) => {
                        const check = e.target.checked;
                        setCheckValue(
                          checkValue.map((data) => {
                            if (v.id === data.id) {
                              //체크박스 선택하게 되면 checkA의 값이 true로 바뀌면서 data.select(false)의 값이 true로 바뀐다.
                              data.select = check;
                              console.log(data.id);
                              console.log(data.select);
                            }
                            return data;
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
                <button type='reset' onClick={formReset}>
                  초기화
                </button>
              </ButtonPosition>
            </InputPosition>
          </fieldset>
        </form>
      </SearchField>
    </div>
  );
}
