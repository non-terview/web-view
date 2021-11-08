import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectUserInfo } from '../../../redux/User/LoginUserSlice'

const Header = () => {
  const userInfo = useSelector( selectUserInfo );

  return (
    <>
      <Box sx={ { flexGrow: 1 } }>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={ { mr: 2 } }
            >
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }>
              News
            </Typography>
            <Button color="inherit">{ userInfo.id === -1 ?
              <Link to="/login">로그인이 필요합니다.</Link> : userInfo.name + "님, 로그인하였습니다." }</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
