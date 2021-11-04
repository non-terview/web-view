import styled from 'styled-components';
import { React } from 'react';
import Button from '@mui/material/Button';
import LineImg from '../../images/box.png';

//제일 큰 틀
const DetailWrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin: 100px auto 0 auto;
`;

// 컨테이너 섹션 부분
const ContainerSection = styled.section`
  position: relative;
  width: 960px;
  margin: 0 auto;
  z-index: 800;
`;

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
  margin: 3px 0 5px;
`;

//DD기본
const DetailDd = styled.dd`
  color: #1976d2;
  width: 240px;
  vertical-align: top;
  display: inline-block;
  font-size: 13px;
  margin: 4px 0 5px;
`;

//회사정보 DD
const DetailDd2 = styled.dd`
  color: #999;
  width: 100px;
  vertical-align: top;
  display: inline-block;
  font-size: 13px;
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

// Main article > div padding 부분
const ContentArticle = styled.article`
  position: relative;
  width: 960px;
  padding: 20px;
  margin: 0 0 40px 0;
  border-top: 2px solid #030303;
  border-bottom: 1px solid #ababab;
  border-left: 1px solid #ababab;
  border-right: 1px solid #ababab;
`;
//상세요강부분
const ContentMain = styled.div`
  position: relative;
  background-color: grey;
  height: 700px;
  margin: 20px auto;
`;

const MainH2 = styled.h2`
  text-align: center;
`;

export default function BoardDetailScreen(props) {
  return (
    //DetailBoxR부분에 사진 넣어야함
    <DetailWrap>
      <ContainerSection>
        <HeaderArticle>
          <HeadertopDiv>
            <CompnayDes>
              <div>
                <Companyname>KMU(주)</Companyname>
              </div>
              프론트엔지니어 모집합니다.
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
                <DetailDt>예시</DetailDt>
                <DetailDd>
                  <strong>예시입니다</strong>
                </DetailDd>
              </dl>
            </DetailBoxM>
            <DetailBoxR>
              <ImgDiv></ImgDiv>
              <h4>회사정보</h4>
              <br />
              <dl>
                <DetailDt>업종</DetailDt>
                <DetailDd2>
                  <strong>IT</strong>
                </DetailDd2>
                <DetailDt>사원수</DetailDt>
                <DetailDd2>
                  <strong>200</strong>
                </DetailDd2>
                <DetailDt>기업형태</DetailDt>
                <DetailDd2>
                  <strong>중견기업</strong>
                </DetailDd2>
                <DetailDt>설립년도</DetailDt>
                <DetailDd2>
                  <strong>2002년</strong>
                </DetailDd2>
                <DetailDt>홈페이지</DetailDt>
                <DetailDd2>
                  <strong>www.test.com</strong>
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
        <ContentArticle>
          <MainH2>상세요강</MainH2>
          <ContentMain>이것저것 값이 들어갈거에ㅐ요~</ContentMain>
        </ContentArticle>
      </ContainerSection>
    </DetailWrap>
  );
}
