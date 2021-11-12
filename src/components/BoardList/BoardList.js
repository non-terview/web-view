import React from 'react';
import { useState, Fragment } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

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

const Tableborder = styled.table`
  border-collapse: collapse;
  border-top: solid 3px #808080;
`;

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

const PagingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px 0px 0px;
`;

//DB에서 회사정보 가져와서 boardList안에 넣기
export default function BoardList() {
  const boardList = [
    {
      id: 1,
      companyname: 'KMU(주)',
      title: '백엔드 개발자 구합니다!',
      description: '신입/경력 학력무관 서울 정규직 4000만원'
    },
    { id: 2, companyname: 'SOO(주)', title: '웹 퍼블리셔 구직합니다.', description: '경력 대졸 서울 정규직 4500만원' },
    { id: 3, companyname: '블랙시스템', title: 'Android개발 경력자 구합니다', description: '경력 대졸 서울 정규직 5000만원' },
    { id: 4, companyname: '소버네트워크', title: '네트워크 엔지니어 구합니다', description: '경력 대졸 서울 정규직 4200만원' }
  ];

  const elements = boardList.map((data, index) => (
    <tr>
      <NameTd>{data.companyname}</NameTd>
      <ContentTd>
        <TitBox>
          <strong>
            <a href='#' target='_blank'>
              {data.title}
            </a>
          </strong>
          <EtcP>
            <span>{data.description}</span>
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
    </tr>
  ));
  return (
    <>
      <Tableborder>
        <colgroup>
          <col width='200' />
          <col width='500' />
          <col width='200' />
        </colgroup>
        <tbody>{elements}</tbody>
      </Tableborder>
      <PagingDiv>
        <Stack spacing={2}>
          <Pagination count={10} color='primary' />
        </Stack>
      </PagingDiv>
    </>
  );
}
