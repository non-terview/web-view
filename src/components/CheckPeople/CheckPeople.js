import React from 'react';

// styles
import styled from 'styled-components';
import Colors from '../../styles/Colors';

const PeopleBoxWrapS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: aqua;
  color: white;
`;
const PeopleBoxTopS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 30px;
  background-color: #161b23;
`;
const PeopleBoxS = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  height: 30px;
  background-color: #161b23;
`;

// 아래 데이터는 예시 데이터
// 이후 리덕스에서 관리해줄 예정
const PeopleData = [
  {
    id: 1,
    name: '홍길동',
    state: 'finish'
  },
  {
    id: 2,
    name: '이순신',
    state: 'wait'
  },
  {
    id: 3,
    name: '삼순신',
    state: 'wait'
  }
];

// 면접 예정자 지원수 / 지원자수
const CheckPeople = () => {
  return (
    <PeopleBoxWrapS>
      {/* 면접 예정자 수 : {PeopleData.length} */}
      <PeopleBoxTop />
      <PeopleBox />
    </PeopleBoxWrapS>
  );
};
const PeopleBoxTop = () => {
  return <PeopleBoxTopS>면접 예정자 수 : {PeopleData.length}</PeopleBoxTopS>;
};

const PeopleNameS = styled.span``;
const PeopleStateS = styled.span`
  color: ${(props) => (props.state === 'wait' ? 'green' : 'red')};
`;
const PeopleBox = () => {
  const PeopleMap = PeopleData.map((index) => (
    <PeopleBoxS key={index.id}>
      <PeopleNameS>{index.name}</PeopleNameS>
      <PeopleStateS state={index.state}>{index.state}</PeopleStateS>
    </PeopleBoxS>
  ));
  return <div>{PeopleMap}</div>;
};

export default CheckPeople;
