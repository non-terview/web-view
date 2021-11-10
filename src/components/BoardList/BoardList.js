import React from 'react';
import { useState, Fragment } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const TitBox = styled.div`
  position: relative;
  height: 46px;
  padding: 0 10px 0 44px;
  margin: 27px 0 31px 0;
  border-left: solid 1px #808080;
  border-right: solid 1px #808080;
`;
const EtcP = styled.p`
  overflow: hidden;
  font-size: 13px;
  margin-top: 9px;
  max-width: 100%;
  text-overflow: ellipsis;
`;

const ContentTr = styled.tr``;

const NameTd = styled.td`
  text-align: center;
  border-bottom: solid 1px #808080;
`;
const ContentTd = styled.td`
  border-bottom: solid 1px #808080;
`;

const ButtonTd = styled.td`
  margin: auto;
  text-align: center;
  border-bottom: solid 1px #808080;
`;

export default function BoardList() {
  const [boardList, setboardList] = useState([
    {
      id: 1,
      companyname: 'KMU',
      title: '백엔드 개발자 구합니다!',
      contents: '신입/경력 학력무관 서울 정규직 4000만원'
    },
    { id: 2, companyname: 'SOO', title: '웹 퍼블리셔 구직합니다.', contents: '경력 대졸 서울 정규직 4500만원' }
  ]);

  /* const elements = boardList.map((data, index) => (

  ));*/
  return (
    <>
      <table>
        <colgroup>
          <col width='200' />
          <col width='500' />
          <col width='200' />
        </colgroup>
        <tbody>
          <ContentTr>
            <NameTd>KMU</NameTd>
            <ContentTd>
              <TitBox>
                <strong>
                  <a href='#' target='_blank'>
                    콘텐츠 디자이너,에디터 / 브랜드디자이너 / 앱개발자 채용
                  </a>
                </strong>
                <EtcP>
                  <span>경력무관</span>
                  <span>학력무관</span>
                  <span>서울 송파구 외</span>
                  <span>정규직</span>
                  <span>5,000만원 이하</span>
                  <span>주임~대리급 외</span>
                </EtcP>
              </TitBox>
            </ContentTd>
            <ButtonTd>
              <Button
                variant='contained'
                onClick={() => {
                  alert('클릭됐어요!');
                }}
              >
                지원하기
              </Button>
            </ButtonTd>
          </ContentTr>
        </tbody>
      </table>
    </>
  );
}
