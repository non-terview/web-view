import React, { useState } from 'react';
import LoginInput from './LoginInput/LoginInput';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core';


import { useDispatch } from 'react-redux';
import { setToken, setInfo } from "../../redux/User/LoginUserSlice";
import axios from "axios";

const useStyles = makeStyles( theme => ( {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing( 2 ),

    '& .MuiTextField-root': {
      margin: theme.spacing( 1 ),
      width: '600px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing( 2 ),
    },
  },
} ) );


export default function LoginForm() {
  // 언어 설정
  const [ lang ] = useState( 'ko' );
  // 이메일, 비밀번호
  const [ email, setEmail ] = useState( '' );
  const [ password, setPassword ] = useState( '' );
  // 회사 정보
  const [ company, setCompany ] = useState( '' );
  // 사용자 / 회사
  const [ isUser, setIsUser ] = useState( true );
  const classes = useStyles();

  const dispatch = useDispatch();

  const GetApiToken = () => {
    axios.get('/api/user/token').then(
      response => {
        dispatch(setToken(response.data.token.token))
      }
    )
  }

  const handleSubmit = ( e ) => {
    e.preventDefault();
    // 토큰 받기
    axios.get( "/api/user/token" )
      .then( ( response ) => {
        // 성공
        const data = response.data;

        axios.post( "/api/login", {
          username:email,
          password:password,
          _csrf: data.token.token
        } ).then().catch(  );

        axios.get( '/api/user' ).then(
          response => {
            dispatch( setInfo( response.data ) )
          }
        )
        GetApiToken();
      } );
  }

  const userMap = [
    {
      id: 1,
      placeholder: 'email',
      setter: setEmail,
      type: 'email',
      value: email
    },
    {
      id: 2,
      placeholder: 'password',
      setter: setPassword,
      type: 'password',
      value: password
    }
  ];

  const companyMap = [
    {
      id: 1,
      placeholder: 'email',
      setter: setEmail,
      type: 'email',
      value: email
    },
    {
      id: 2,
      placeholder: 'password',
      setter: setPassword,
      type: 'password',
      value: password
    },
    {
      id: 3,
      placeholder: 'company',
      setter: setCompany,
      type: 'text',
      value: company
    }
  ];

  function LoginInputView() {
    return isUser ? userMap : companyMap;
  }

  const langString = {
    ko: {
      email: '이메일',
      password: '비밀번호',
      company: '회사'
    },
    en: {
      email: 'Email',
      password: 'Password',
      company: 'Company'
    }
  };

  return (
    <form className={ classes.root } onSubmit={ handleSubmit }>
      <LoginInput lang={ lang } langString={ langString } loginMap={ LoginInputView() }/>
      <div>
        <Button
          variant="outlined"
          type='button'
          onClick={ () => {
            setIsUser( !isUser );
          } }
        >{ isUser ? '회사 로그인으로 전환' : '개인 사용자 로그인으로 전환' }</Button>
        <Button type="submit" variant="outlined" color="primary">
          로그인 하기
        </Button>
      </div>
    </form>
  );
}
