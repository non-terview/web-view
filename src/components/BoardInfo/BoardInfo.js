import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';

class BoardInfo extends Component {
  render() {
    return (
      <div>
        <form>
          <table border='1'>
            <th>제목</th>
            <td>
              <input type='text' id='title' placeholder='글 제목'></input>
            </td>
            <tr>
              <th>내용</th>
              <td>
                <input type='text' id='info' placeholder='글 내용'></input>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

export default BoardInfo;
