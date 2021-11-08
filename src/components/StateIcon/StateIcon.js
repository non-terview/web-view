import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

// redux
import { changeState, selectUserState } from '../../redux/User/IconStateSlice';

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
  color: white;
`;

const RightBoxWrap = styled.div`
  width: 70px;
  height: 30px;
  border-radius: 0 10px 10px 0;
  /* props로 background 색상 받아와서 상태에 따라 다른색 표시  */
  background-color: ${(props) => (props.color ? props.color : '#fff')};
  text-align: center;
`;

const StateIcon = () => {
  const selectList = ['참여', '개시', '진행중', '종료'];
  const userState = useSelector(selectUserState);
  const dispatch = useDispatch();
  const [color, setColor] = useState('#f242f5');

  // 색상 값 설정은 동기처리
  useEffect(() => {
    console.log(`상태값 : ${userState}`);
    handleColorSelect();
  });

  // option 에서 선택한 value값을 dispatch를 통해 전달.
  // option 선택 버튼은 회사 계정에서만 보이도록 설정해야함.
  const handleSelect = (e) => {
    dispatch(changeState(e.target.value));
    handleColorSelect();
  };

  // 객체 내에 색상값을 넣어서 설정하고 싶음.
  const handleColorSelect = () => {
    switch (userState) {
      case '참여':
        setColor('#11f54e');
        break;
      case '개시':
        setColor('#11c7f5');
        break;
      case '진행중':
        setColor('#f242f5');
        break;
      case '종료':
        setColor('#f54542');
        break;
      default:
        break;
    }
  };

  return (
    <StateIconWrap>
      <select onChange={handleSelect} value={userState}>
        {selectList.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <LeftBox />
      <RightBox color={color} />
    </StateIconWrap>
  );
};

const LeftBox = () => {
  return <LeftBoxWrap>지원자 상태</LeftBoxWrap>;
};
const RightBox = ({ color }) => {
  const userState = useSelector(selectUserState);

  return <RightBoxWrap color={color}>{userState}</RightBoxWrap>;
};

export default StateIcon;
