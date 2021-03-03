/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import firebase from '../../firebase';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Abel';
  font-size: 20px;
  color: white;
  margin: 0 auto;
  width: 100%;
  height: 70px;
  background-color: black;
`;

const Logo = styled.ul`
  list-style: none;
`;

const User = styled.div`
  display: flex;
  margin-top: 20px;
  width: 400px;
`;

const MenuItem = styled.li`
  margin-right: 1vw;
`;

const Logout = styled.div`
  width: 20%;
  padding-left: 60px;
`;

const NickName = styled.div`
  width: 50%;
  padding-left: 10px;
`;

const IMG = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 3px;
  padding-left: 20px;
`;

function Header() {
  const loginState = useSelector((state) => state.user.currentUser);

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <Container>
      <Logo>
        <MenuItem>📋 PJT-01</MenuItem>
      </Logo>
      <User>
        {loginState && (
          <IMG src={loginState && loginState.photoURL} roundedCircle />
        )}
        {loginState && (
          <NickName>{loginState.displayName}님 환영합니다.</NickName>
        )}
        {loginState && (
          <Logout onClick={handleLogout}>
            <a style={{ cursor: 'pointer' }}>logout</a>
          </Logout>
        )}
      </User>
    </Container>
  );
}

export default Header;
