import React from 'react';
import firebase from '../../firebase';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin: 0 auto;
  width: '100%';
  height: '5vw';
  margin-bottom: 0.25em;
  background-color: #f4f5fa;
`;

const Logo = styled.ul`
  list-style: none;
`;

const User = styled.ul`
  list-style: none;
`;

const MenuItem = styled.li`
  margin-right: 1vw;
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
          <MenuItem onClick={handleLogout} style={{ cursor: 'pointer' }}>
            logout
          </MenuItem>
        )}
      </User>
    </Container>
  );
}

export default Header;
