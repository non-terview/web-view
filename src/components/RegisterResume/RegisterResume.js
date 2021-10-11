import { style } from '@mui/system';
import React, { useState } from 'react';
import styled from 'styled-components';

const FormStyle = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FontStyle = styled.h2`
  text-align: left;
  padding: 0px 20px;
`;

const SpanWord = styled.span`
  font-size: 14px;
  padding: 0px 0px 0px 10px;
  fontweight: 300px;
`;

const FieldStyle = styled.fieldset`
  width: 800px;
  height: 400px;
`;

const BtnStyle = styled.button`
  position: absolute;
  top: 125px;
  right: 390px;
  font-size: 18px;
  width: 110px;
  height: 30px;
  background-color: #267ff7;
  color: #ffffff;
`;

const LineStyle = styled.hr`
  margin: 0px 20px 0px 20px;
`;

const LineStyle2 = styled.hr`
  margin: 10px 20px 0px 20px;
`;

const LineStyle3 = styled.hr`
  margin: 15px 3px 0px 0px;
`;

//민증사진 규격 맞춰야함
const ImgField = styled.div`
  width: 170px;
  height: 180px;
  margin: 15px 0px 0px 20px;
  background-color: Gray;
`;

const ImgBtn = styled.button`
  font-size: 15px;
  width: 80px;
  height: 25px;
  margin: 8px 0px 0px 68px;
  background-color: #267ff7;
  color: #ffffff;
`;

const UserInfo = styled.div`
  width: 550px;
  height: 180px;
  margin: 0px 0px 0px 210px;
`;
const UserName = styled.h2``;

const UserInfoSpan = styled.span`
  font-size: 14px;
  padding: 0px 0px 0px 10px;
  fontweight: 300px;
`;

export default function RegisterResume() {
  //이미지
  const [imgUpLoad, setImgUpLoad] = useState('');

  return (
    <div>
      <FormStyle>
        <FieldStyle>
          <legend>이력서 등록</legend>
          <br />
          <FontStyle>
            개인기본정보
            <SpanWord>가입 시 등록한 개인정보를 한번 더 확인해 주세요</SpanWord>
          </FontStyle>
          <BtnStyle type='submit'>회원정보수정</BtnStyle>
          <br />
          <LineStyle />
          <ImgField>
            <UserInfo>
              <UserName>
                이름
                <UserInfoSpan>
                  성별 나이 / 년도
                  <LineStyle3 />
                </UserInfoSpan>
              </UserName>
            </UserInfo>
          </ImgField>
          <ImgBtn>파일선택</ImgBtn>
          <LineStyle2 />
        </FieldStyle>
      </FormStyle>
    </div>
  );
}
