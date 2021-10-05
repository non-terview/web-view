import React from 'react';

// Styles
import Colors from '../../styles/Colors';
import styled from 'styled-components';

const StateIconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LeftBoxWrap = styled.div`
  width: 100px;
  height: 30px;
  border-radius: 10px 0 0 10px;
  background-color: ${Colors.colorDarkGrey};
  text-align: center;
`;

const RightBoxWrap = styled.div`
  width: 40px;
  height: 30px;
  border-radius: 0 10px 10px 0;
  /* props로 background 색상 받아와서 상태에 따라 다른색 표시  */
  background-color: ${Colors.primaryColor};
  text-align: center;
`;

// 후에 리덕스에서 상태값 받아와서 적용하기
const StateIcon = () => {
  // const [iconState, setIconState] = useState('참여');
  // const stateMap = [
  //   {
  //     id: 1,
  //     state: '참여',
  //     color: '#45ff38'
  //   },
  //   {
  //     id: 2,
  //     state: '종료',
  //     color: '#ff3838'
  //   }
  // ];
  return (
    <StateIconWrap>
      <LeftBox />
      <RightBox />
    </StateIconWrap>
  );
};

const LeftBox = () => {
  return <LeftBoxWrap>fdf</LeftBoxWrap>;
};
const RightBox = () => {
  return <RightBoxWrap>fdf</RightBoxWrap>;
};

export default StateIcon;
