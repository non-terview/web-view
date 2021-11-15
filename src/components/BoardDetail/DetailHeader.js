import styled from 'styled-components';
import { React, useState } from 'react';
import Button from '@mui/material/Button';
import LineImg from '../../images/box.png';
import CompanyInfo from '../../page/CompanyInfo/CompanyInfo';

// article > div padding 부분
const HeaderArticle = styled.article`
  position: relative;
  width: 960px;
  padding: 20px;
  border-top: 2px solid #030303;
  border-bottom: 1px solid #ababab;
  border-left: 1px solid #ababab;
  border-right: 1px solid #ababab;
  background: url(${LineImg}) repeat-y 0 100%;
`;

//헤더 채용정보 div top
const HeadertopDiv = styled.div`
  height: 110px;
  position: relative;
  top: 0px;
  margin: 0px auto;
`;

//헤더 채용정보 div bottom
const HeaderbottomDiv = styled.div`
  height: 210px;
  position: relative;
  top: 0px;
  margin: 0px auto;
`;

//헤더 지원하기버튼div
const HeaderDivButton = styled.div`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//회사명
const Companyname = styled.span`
  font-size: 17px;
  color: #333;
  margin-bottom: 50px;
  letter-spacing: -1px;
`;

//모집명
const CompnayDes = styled.h3`
  font-size: 27px;
  color: #000;
  width: 690px;
  padding: 5px 0 20px;
  border-bottom: 1px solid #444;
  letter-spacing: -2px;
`;

//지원 자격
const DetailBoxL = styled.div`
  display: inline-block;
  width: 345px;
  margin: 0;
  vertical-align: top;
`;

//근무 조건
const DetailBoxM = styled.div`
  display: inline-block;
  width: 340px;
  vertical-align: top;
`;
//회사 정보
const DetailBoxR = styled.div`
  display: inline-block;
  width: 200px;
  margin: 0 0 0 30px;
  padding: 0 0 0 30px;
  vertical-align: top;
`;

//dt
const DetailDt = styled.dt`
  color: #000000;
  width: 60px;
  vertical-align: top;
  display: inline-block;
  font-size: 13px;
  margin: 2px 0 5px;
`;

//DD기본
const DetailDd = styled.dd`
  color: #1976d2;
  width: 240px;
  vertical-align: top;
  display: inline-block;
  font-size: 12px;
  margin: 4px 0 5px;
`;

//회사정보 DD
const DetailDd2 = styled.dd`
  color: #999;
  width: 100px;
  vertical-align: top;
  display: inline-block;
  font-size: 12px;
  margin: 4px 0 5px;
`;

// IMG div
const ImgDiv = styled.div`
  position: absolute;
  top: -110px;
  left: 745px;
  display: table;
  margin-bottom: 0px;
  width: 160px;
  height: 93px;
  background: #000000;
  text-align: center;
`;

export default function DetailHeader() {
  // isShow의 초기값은 무조건 FALSE
  const BoardInfo = {
    id: 1,
    compnayname: 'KMU(주)',
    description: '프론트 엔지니어 모집합니다'
  };

  const CompanyInfo = [
    {
      id: 1,
      company: '네이버',
      type: 'IT',
      employees: '4000',
      division: '대기업',
      website: 'www.navercorp.com',
      img: '~~경로'
    }
  ];
  return (
    //DetailBoxR부분에 사진 넣어야함
    <>
      <HeaderArticle>
        <HeadertopDiv>
          <CompnayDes>
            <div>
              <Companyname>{BoardInfo.compnayname}</Companyname>
            </div>
            {BoardInfo.description}
          </CompnayDes>
        </HeadertopDiv>
        <HeaderbottomDiv>
          <DetailBoxL>
            <h4>지원자격</h4>
            <br />
            <dl>
              <DetailDt>경력</DetailDt>
              <DetailDd>
                <strong>신입</strong>
              </DetailDd>
              <DetailDt>학력</DetailDt>
              <DetailDd>
                <strong>무관</strong>
              </DetailDd>
              <DetailDt>우대</DetailDt>
              <DetailDd>
                <strong>기사 자격증</strong>
              </DetailDd>
            </dl>
          </DetailBoxL>
          <DetailBoxM>
            <h4>근무조건</h4>
            <br />
            <dl>
              <DetailDt>고용형태</DetailDt>
              <DetailDd>
                <strong>정규직</strong>
              </DetailDd>
              <DetailDt>급여</DetailDt>
              <DetailDd>
                <strong>협의</strong>
              </DetailDd>
              <DetailDt>지역</DetailDt>
              <DetailDd>
                <strong>시청역</strong>
              </DetailDd>
              <DetailDt>시간</DetailDt>
              <DetailDd>
                <strong>09:00~18:00</strong>
              </DetailDd>
            </dl>
          </DetailBoxM>
          <DetailBoxR>
            <ImgDiv></ImgDiv>
            <h4>{CompanyInfo[0].company}</h4>
            <br />
            <dl>
              <DetailDt>업종</DetailDt>
              <DetailDd2>
                <strong>{CompanyInfo[0].type}</strong>
              </DetailDd2>
              <DetailDt>사원수</DetailDt>
              <DetailDd2>
                <strong>{CompanyInfo[0].employees}</strong>
              </DetailDd2>
              <DetailDt>기업형태</DetailDt>
              <DetailDd2>
                <strong>{CompanyInfo[0].division}</strong>
              </DetailDd2>
              <DetailDt>설립년도</DetailDt>
              <DetailDd2>
                <strong>2002년</strong>
              </DetailDd2>
              <DetailDt>홈페이지</DetailDt>
              <DetailDd2>
                <strong>{CompanyInfo[0].website}</strong>
              </DetailDd2>
            </dl>
          </DetailBoxR>
        </HeaderbottomDiv>
      </HeaderArticle>
      <HeaderDivButton>
        <Button
          variant='contained'
          size='large'
          onClick={() => {
            alert('clicked');
          }}
        >
          지원하기
        </Button>
      </HeaderDivButton>
    </>
  );
}
