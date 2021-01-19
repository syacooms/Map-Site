import React from 'react';
import styled from 'styled-components';

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
  display: flex;
`;

const Login = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  display: flex;
  margin-right: 1vw;
`;

function Header() {
  return (
    <Container>
      <Logo>
        <MenuItem>Logo</MenuItem>
      </Logo>
      <Login>
        <MenuItem>login</MenuItem>
        <MenuItem>logout</MenuItem>
      </Login>
    </Container>
  );
}

export default Header;
