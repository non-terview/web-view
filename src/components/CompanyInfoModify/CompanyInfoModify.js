import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';

export default function CompanyInfoModify() {
  const ContentTr = styled.tr`
    display: ;
    width: 300px;
    padding: 20px 40px;
  `;

  const ContentTd = styled.td`
    background-color: red;
    padding: 20px 32px;
    font-size: 13px;
  `;

  const qnaArr = [
    {
      id: 1,
      title: '기업정보 중 회사명을 변경하고 싶습니다.',
      contents: '상호명 변경 시~'
    },
    { id: 2, title: '기업정보 중 가입자 이름 변경은 어떻게 하나요?', contents: '기업정보 내용이 들어갑니다' }
  ];

  let url = 'https://contents.albamon.kr/monimg/customer/faq/icon_arrow_open.gif';
  const [arrow, setArrow] = useState('https://contents.albamon.kr/monimg/customer/faq/icon_arrow_open.gif');
  const [sub, setSub] = useState('내용열기');

  function show_content() {
    if (url === arrow) {
      setArrow('https://contents.albamon.kr/monimg/customer/faq/icon_arrow_close.gif');
      setSub('내용닫기');
    } else {
      setArrow('https://contents.albamon.kr/monimg/customer/faq/icon_arrow_open.gif');
      setSub('내용열기');
    }
  }
  return (
    <Fragment>
      <table>
        <colgroup>
          <col width='30' />
          <col width='400' />
          <col width='10' />
        </colgroup>
        <tbody>
          {qnaArr.map((data, index) => (
            <Fragment key={index}>
              <tr>
                <td>Q.</td>
                <td>
                  <h4>{data.title}</h4>
                </td>
                <td>
                  <Link to='#' onClick={show_content}>
                    <img src={arrow} alt={sub} />
                  </Link>
                </td>
              </tr>
              <ContentTr key={data.id}>
                <ContentTd colSpan='3'>{data.contents}</ContentTd>
              </ContentTr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}
