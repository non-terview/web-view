import styled from 'styled-components';
import React, { Fragment, useState } from 'react';
import Colors from '../../styles/Colors';

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleDiv = styled.div`
  width: 150px;
  height: 42px;
  margin: 20px auto;
  background-color: #f9fafc;
`;

const TitleBtn = styled.button`
  font-size: 13px;
  color: #333333;
  width: 100%;
  height: 100%;
  text-align: left;
  padding-left: 20px;
  font-weight: bold;
`;

const ContentDiv = styled.div`
  width: 100%;
  height: 210px;
  padding 2.5px 0px;
  padding-left: 20px;
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
`;

export default function DetailSch() {
  const [ContentList, setContentList] = useState([
    {
      id: '1',
      name: '테스트',
      value: '테스트'
    },
    {
      id: '2',
      name: 'test2',
      value: '테스트'
    },
    {
      id: '3',
      name: 'test3',
      value: '테스트'
    },
    {
      id: '4',
      name: 'test4',
      value: '테스트'
    },
    {
      id: '5',
      name: 'test5',
      value: '테스트'
    },
    {
      id: '6',
      name: 'test6',
      value: '테스트'
    },
    {
      id: '7',
      name: 'test7',
      value: '테스트'
    },
    {
      id: '8',
      name: 'test8',
      value: '테스트'
    }
  ]);

  const ContentElement = ContentList.map((c, i) => (
    <Fragment key={c.id}>
      <label>
        <UlStyle>
          <LiStyle>{c.value}</LiStyle>
        </UlStyle>
      </label>
    </Fragment>
  ));

  return (
    <TitleDiv>
      <TitleBtn>직무</TitleBtn>
      <ContentDiv>{ContentElement}</ContentDiv>
    </TitleDiv>
  );
}
