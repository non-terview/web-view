import styledEngine from '@mui/styled-engine';
import { style } from 'dom-helpers';
import React, { useState } from 'react';
import styled from 'styled-components';

const FormStyle = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleFont = styled.h2`
  text-align: left;
  margin: 0px 20px; 0px; 0px;
`;

const TitleSpan = styled.span`
  font-size: 14px;
  fontweight: 300px;
  margin: 0px 0px 0px 5px;
`;

const FieldStyle = styled.fieldset`
  width: 800px;
  height: 700px;
`;

const ModifyBtn = styled.button`
  font-size: 18px;
  width: 115px;
  height: 35px;
  margin: 0px 0px 0px 155px;
  background-color: #267ff7;
  color: #ffffff;
`;
//hr이
const LineStyle = styled.hr`
  margin: 0px 20px 0px 20px;
`;

const LineStyle2 = styled.hr`
  margin: 10px 20px 0px 20px;
`;

const LineStyle3 = styled.hr`
  margin: 10px 3px 0px 0px;
`;

//민증사진 규격 맞춰야함
const ImgField = styled.div`
  width: 170px;
  height: 180px;
  margin: 15px 0px 0px 20px;
  background-color: Gray;
`;

const ImgInput = styled.input`
  font-size: 15px;
  width: 80px;
  height: 30px;
  margin: 10px 0px 0px 68px;
`;

const UserInfodiv = styled.div`
  width: 550px;
  height: 180px;
  margin: 0px 0px 0px 210px;
`;

const UserInfo2 = styled.div`
  margin: 40px 0px 0px 0px;
`;

const UserInfoSpan = styled.span`
  font-size: 14px;
  padding: 0px 0px 0px 10px;
  fontweight: 300px;
`;

const liStyle = styled.li`
  font-size: 18px;
`;

const UserDataFont = styled.span`
  font-size: 18px;
  margin: 0px 0px 0px 40px;
`;

const UserDataFont2 = styled.span`
  font-size: 18px;
  margin: 0px 0px 0px 24px;
`;

const ResumeFont = styled.h2`
  text-align: left;
  margin: 0px 20px;
`;

const ResumeInput = styled.input`
  width: 755px;
  height: 45px;
  font-size: 20px;
  margin: 10px 20px;
`;

const AcademicSelect = styled.select`
  font-size: 15px;
  width: 110px;
  height: 40px;
  margin: 0px 0px 0px 100px;
`;

const AcademicState = styled.select`
  font-size: 15px;
  width: 110px;
  height: 40px;
  margin: 0px 0px 0px 10px;
`;

const ResetBtn = styled.button`
  font-size: 18px;
  width: 115px;
  height: 35px;
  margin: 0px 0px 10px 290px;
  background-color: #267ff7;
  color: #ffffff;
`;

//글자 옆으로 버튼 붙여야함 현재는 위치가 좀 다름
//li위치 조금 띄워야함
//select박스도 초등, 중등, 고등, 대학 선택 시 상태에 뜨는 option값 다르게 해야함
//고등학교 부터는 선택 시 밑에 학력 상세라고 또 뜸 그것도 해야함
//체크박스 선택하면 고등학교, 대학교, 대학원까지 입학~졸업 년도 학교명 대학부터는 전공적는 칸까지
//체크박스 선택하면 해당 학력만 밑에 뜨게 체크 안하면 없고 했다가 풀면 사라짐
export default function RegisterResume() {
  return (
    <div>
      <FormStyle>
        <FieldStyle>
          <legend>이력서 등록</legend>
          <br />
          <div style={{ display: 'flex' }}>
            <TitleFont>
              개인기본정보
              <TitleSpan>가입 시 등록한 개인정보를 한번 더 확인해 주세요</TitleSpan>
            </TitleFont>
            <ModifyBtn type='submit'>회원정보수정</ModifyBtn>
          </div>
          <br />
          <LineStyle />
          <ImgField>
            <UserInfodiv>
              <h2>
                이름
                <UserInfoSpan>
                  성별 나이 / 년도
                  <LineStyle3 />
                </UserInfoSpan>
              </h2>
              <UserInfo2>
                <ui>
                  <li>
                    주소 <UserDataFont>경기도 남양주시</UserDataFont>
                  </li>
                  <li>
                    휴대폰 <UserDataFont2>010-1234-1234</UserDataFont2>
                  </li>
                  <li>
                    이메일 <UserDataFont2>ghdrlfehd@google.com</UserDataFont2>
                  </li>
                </ui>
              </UserInfo2>
            </UserInfodiv>
          </ImgField>
          <ImgInput type='file'></ImgInput>
          <LineStyle2 />
          <br />
          <div>
            <ResumeFont>이력서 작성</ResumeFont>
            <ResumeInput type='text' name='contents' placeholder='내 이력서를 돋보일 수 있는 PR 한마디'></ResumeInput>
          </div>
          <br />
          <div style={{ display: 'flex' }}>
            <TitleFont>
              학력사항
              <TitleSpan>학력 정보를 정확하게 입력해 주세요</TitleSpan>
            </TitleFont>
            <ResetBtn type='submit'>전체초기화</ResetBtn>
          </div>
          <div>
            <LineStyle2 />
            <br />
            <TitleFont>
              최종학력
              <AcademicSelect name='academic ability'>
                <option>학교</option>
                <option>초등학교</option>
                <option>중학교</option>
                <option>고등학교</option>
                <option>대학(2,3년제)</option>
                <option>대학(4년제)</option>
                <option>대학원</option>
              </AcademicSelect>
              <AcademicState name='academic state'>
                <option>상태</option>
                <option>졸업</option>
                <option>재학</option>
                <option>중퇴</option>
                <option>휴학</option>
                <option>수료</option>
              </AcademicState>
            </TitleFont>
          </div>
          <LineStyle2 />
        </FieldStyle>
      </FormStyle>
    </div>
  );
}
