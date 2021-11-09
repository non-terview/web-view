import styled from 'styled-components';
import React, { Fragment, useState, useEffect } from 'react';
import Colors from '../../styles/Colors';

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleDiv = styled.div`
  width: 170px;
  height: 42px;
  margin: 20px auto;
  background-color: #f9fafc;
`;

const TitleBtn = styled.button`
  font-size: 14px;
  color: #333333;
  width: 100%;
  height: 100%;
  text-align: left;
  padding-left: 20px;
  font-weight: bold;
`;

const btn123123 = styled.button`
  widht: 10px;
  height: 10px;
`;

const ContentDiv = styled.div`
  width: 100%;
  height: 210px;
  padding 2.5px 0px;
  padding-left: 15px;
  text-align: left;
  background-color: white;
  overflow: scroll;
  overflow-x: hidden;
`;

const UlStyle = styled.ul`
  list-style: none;
`;

const LiStyle = styled.li`
  margin: 11px 0px;
  cursor: Pointer;
  &:hover {
    color: #39f;
  }
`;

const DetailDiv = styled.div`
  width: 100%;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export default function DetailSch() {
  const [contentList, setContentList] = useState([]);
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    const contentList = [
      { id: '1', name: '경영·사무', value: '경영·사무' },
      { id: '2', name: '마케팅·홍보·광고', value: '마케팅·홍보·광고' },
      { id: '3', name: 'IT·인터넷', value: 'IT·인터넷' },
      { id: '4', name: '디자인', value: '디자인' },
      { id: '5', name: '무역·유통', value: '무역·유통' },
      { id: '6', name: '영업·고객상담', value: '영업·고객상담' },
      { id: '7', name: '서비스', value: '서비스' },
      { id: '8', name: '연구개발·설계', value: '연구개발·설계' },
      { id: '9', name: '생산·재조', value: '생산·재조' },
      { id: '10', name: '교육', value: '교육' },
      { id: '11', name: '의료', value: '의료' },
      { id: '12', name: '미디어', value: '미디어' },
      { id: '13', name: '전문·특수직', value: '전문·특수직' }
    ];
    setContentList(
      contentList.map((c) => {
        return {
          select: false,
          id: c.id,
          name: c.name,
          value: c.value
        };
      })
    );
  }, []);

  const ContentElement = contentList.map((c, i) => (
    <Fragment key={c.id}>
      <label>
        <UlStyle>
          <LiStyle>
            {c.name} &nbsp;
            <input
              type='checkbox'
              checked={c.select}
              onChange={(e) => {
                const check = e.target.checked;
                setContentList(
                  contentList.map((data) => {
                    if (c.id === data.id) {
                      data.select = check;
                      console.log(data.value);
                      console.log(data.id);
                      console.log(data.select);
                    }
                    return data;
                  })
                );
              }}
            ></input>
          </LiStyle>
        </UlStyle>
      </label>
    </Fragment>
  ));

  return (
    //titlebtn 클릭 하면 밑으로 div창 하나 더 띄워야함
    //이것도 따로 js파일 만들어야하는건가?
    <TitleDiv>
      <TitleBtn>직무</TitleBtn>
      <ContentDiv>{ContentElement}</ContentDiv>
      <DetailDiv showDetail={showDetail}>test</DetailDiv>
    </TitleDiv>
  );
}
