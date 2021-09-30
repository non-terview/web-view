import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

export default function CompanyInfoModify() {
  const ContentTr = styled.tr`
    display: ${(props) => props.display || 'none'};
  `;

  function show_content(a) {
    if (ContentTr.display === '') {
      ContentTr.display = 'none';
    } else {
      ContentTr.display = '';
    }
  }
  return (
    <Fragment>
      <table>
        <colgroup>
          <col width='30' />
          <col width='*' />
          <col width='40' />
        </colgroup>
        <thead></thead>
        <tbody>
          <tr className='offQ' id='question_0'>
            <td className='mark'>Q.</td>
            <td className='question'>
              <Link to='#' onClick={show_content(0)}>
                사업자등록번호가 없으면 아이디/비밀번호 찾기를 할 수 없나요?
              </Link>
            </td>
            <td className='arrow'>
              <Link to='#' onClick={show_content(0)}>
                <img id='arrow_0' src='https://contents.albamon.kr/monimg/customer/faq/icon_arrow_open.gif' alt='내용열기' />
              </Link>
            </td>
          </tr>
          <ContentTr>
            <td colSpan={3}>
              <div>
                <b>[기업회원 아이디 찾기 방법]</b>
                <br />
                ① 사업자등록번호로 찾기
                <br />
                ② 아이핀으로 찾기
                <br />
                ③ 이메일로 찾기
                <br />
              </div>
            </td>
          </ContentTr>
        </tbody>
      </table>
    </Fragment>
  );
}
