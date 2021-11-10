import React from 'react';
import { useState, Fragment } from 'react';
import styled from 'styled-components';

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

  const elements = boardList.map((data, index) => (
    <Fragment key={index}>
      <tr>
        <td>{data.companyname}</td>
        <td>
          <h4>{data.title}</h4>
        </td>
      </tr>
      <tr>
        <td colSpan='3'>{data.contents}</td>
      </tr>
    </Fragment>
  ));
  return (
    <Fragment>
      <table>
        <colgroup>
          <col width='50' />
          <col width='400' />
          <col width='10' />
        </colgroup>
        <tbody>{elements}</tbody>
      </table>
    </Fragment>
  );
}
