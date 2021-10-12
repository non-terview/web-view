import styled from 'styled-components';
import Colors from '../../styles/Colors';
import { Fragment, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function CompanyInfoModify() {
  //추가적인 디자인을 할경우,,,건들기로..
  const ContentTr = styled.tr`
    border-bottom: 1px solid #000;
  `;

  //background-color는 ContentTr 구역을 보기위해 잠시 써놓음
  //opacity를 사용해보려했으나,,실패,,
  const ContentTd = styled.td`
    background-color: rgba(100, 100, 100, 0.1);
    padding: 20px 32px;
    font-size: 13px;
  `;

  const ContentHr = styled.hr`
    width: 50px;
    height: 0.9px;
  `;

  // isShow의 초기값은 무조건 FALSE
  const [qnaArr, setqnaArr] = useState([
    {
      id: 1,
      title: '기업정보 중 회사명을 변경하고 싶습니다.',
      contents: '상호명 변경 시~',
      isShow: false
    },
    { id: 2, title: '기업정보 중 가입자 이름 변경은 어떻게 하나요?', contents: '기업정보 내용이 들어갑니다', isShow: false }
  ]);

  //onClick 이벤트으로 element에 data.ID값을 가져온 후  const 배열로 만든 데이터 id와 element ID값을 비교하고
  // id값이 동일하다면(true) isShow의 값을 반대로 설정한다.
  const showContent = (id) => {
    setqnaArr(qnaArr.map((qnaArr) => (qnaArr.id === id ? { ...qnaArr, isShow: !qnaArr.isShow } : { ...qnaArr, isShow: false })));
  };

  const elements = qnaArr.map((data, index) => (
    <Fragment key={index}>
      <tr>
        <td>Q.</td>
        <td>
          <h4>{data.title}</h4>
          <ContentHr />
        </td>
        {/*data.isShow를 기준으로 Arrow태그를 변경해준다
         즉 컨텐츠가 안보일때는 DownIcon,  보일때는 UpIcon이 뜨게한다.*/}
        <td>{data.isShow ? <KeyboardArrowUpIcon onClick={() => showContent(data.id)} /> : <KeyboardArrowDownIcon onClick={() => showContent(data.id)} />}</td>
      </tr>
      {data.isShow ? (
        <Fragment>
          <ContentTr>
            <ContentTd colSpan='3'>{data.contents}</ContentTd>
          </ContentTr>
          <hr />
        </Fragment>
      ) : (
        <></>
      )}
    </Fragment>
  ));

  return (
    <Fragment>
      <table>
        <colgroup>
          <col width='30' />
          <col width='400' />
          <col width='10' />
        </colgroup>
        <tbody>{elements}</tbody>
      </table>
    </Fragment>
  );
}
