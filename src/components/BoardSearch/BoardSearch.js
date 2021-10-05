import React, { Fragment, useEffect, useState } from 'react';
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

  //오브젝트는 map() 함수를 가지고 있지 않아서 map()을 쓰려면 배열로 선언해야한다.
  //그래서 위에 select:false 값은 객체로 선언 되어있기 때문에 set으로 바꿀수가 없었다. (배열로 만들면 밑에 map값이 제대로 출력되지가 않음)
  //그래서 for문으로 기존 객체값을 읽어서 false로 바꿔줬다. (사실 이게 맞는지는 모르겠다.)
  const formReset = (e) => {
    setCompanyName('');
    checkValue.forEach((x, i) => {
      checkValue[i].select = false;
    });
    console.log(checkValue);
  };

  const brNumber = (i) => {
    if ((i + 1) % 4 === 0) return <br></br>;
    return <></>;
  };

  return (
    <div>
      <SearchField>
        <form method='GET'>
          <fieldset style={{ width: '310px' }}>
            <legend>검색</legend>
            <InputPosition>
              기업명 : <input type='text' id='companyname' name='companyname' value={companyname} placeholder='기업명을 입력해주세요.' onChange={companySearch}></input>
              <br />
              <div>
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
                              //체크박스 선택하게 되면 const check의 값이 true로 바뀌면서 data.select(false)의 값이 true로 바뀐다.
                              //true에서 false가 될 때도 마찬가지.
                              //console.log는 값 확인용
                              data.select = check;
                              console.log(data.id);
                              console.log(data.select);
                            }
                            return data;
                          })
                        );
                      }}
                    ></input>
                    {brNumber(i)}
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
