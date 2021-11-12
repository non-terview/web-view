import styled from 'styled-components';
import { React } from 'react';
import { Fragment } from 'react';

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
  margin: 20px auto;
`;

const MainH2 = styled.h2`
  text-align: center;
`;

export default function DetailContent() {
  return (
    //DetailBoxR부분에 사진 넣어야함
    <>
      <ContentArticle>
        <MainH2>상세요강</MainH2>
        <ContentMain>이것저것 값이 들어갈거에ㅐ요~</ContentMain>
      </ContentArticle>
    </>
  );
}
