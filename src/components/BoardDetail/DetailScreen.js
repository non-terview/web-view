import styled from 'styled-components';
import { React } from 'react';
import DetailHeader from './DetailHeader';
import DetailContent from './DetailContent';

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
`;

export default function BoardDetailScreen(props) {
  return (
    <DetailWrap>
      <ContainerSection>
        <DetailHeader />
        <DetailContent />
      </ContainerSection>
    </DetailWrap>
  );
}
