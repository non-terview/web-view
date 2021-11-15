import React from 'react';
import styled from 'styled-components';
import BoardList from '../BoardList/BoardList';

//제일 큰 틀
const DetailWrap = styled.div`
  display: flex;
  width: 100%;
  margin: 50px auto 0 auto;
  background-color: blue;
`;

// 컨테이너 아티클 부분
const ContainerArticle = styled.article`
  position: relative;
  width: 960px;
  margin: 0 auto;
  background-color: red;
`;

// 헤더 섹션 부분
const HeaderSection = styled.section`
  position: relative;
  width: 960px;
  height: 200px;
  padding: 20px;
  background-color: skyblue;
`;

// 바디 섹션 부분
const BodySection = styled.section`
  position: relative;
  width: 960px;
  height: 400px;
  padding: 20px;
  margin: 40px auto;
  background-color: skyblue;
`;
export default function BoardMain() {
  return (
    <DetailWrap>
      <ContainerArticle>
        <HeaderSection>게시판 상세 검색 들어갈 부분</HeaderSection>
        <BodySection>
          <BoardList></BoardList>
        </BodySection>
      </ContainerArticle>
    </DetailWrap>
  );
}
