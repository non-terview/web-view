import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Fragment, React } from 'react';

const propTypes = {};

const defaultProps = {};
//게시판 내용이 들어가는 부분
const ContentHeader = styled.div`
  width: 800px;
  height: 300px;
  background-color: grey;
  display: flex;
  margin: 50px auto;
`;

const ContentContainer = styled.section`
  position: relative;
  width: 960px;
  height: 1500px;
  margin: 0 auto;
  background-color: skyblue;
`;
const ContentFooter = styled.div`
  width: 800px;
  height: 700px;
  background-color: grey;
  display: flex;
  margin: 100px auto;
`;

export default function BoardDetailScreen(props) {
  return (
    <Fragment>
      <ContentContainer>
        <ContentHeader>아아아</ContentHeader>
        <ContentFooter>상세정보 및 조건이 보여지는곳이에요</ContentFooter>
      </ContentContainer>
    </Fragment>
  );
}

BoardDetailScreen.propTypes = propTypes;
BoardDetailScreen.defaultProps = defaultProps;
