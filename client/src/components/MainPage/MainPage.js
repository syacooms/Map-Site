import React from 'react';
import styled from 'styled-components';
import Search from './MainPanel/Search';

const Container = styled.section`
  display: flex;
  background-color: #f4f5fa;
`;

const Main = styled.section`
  width: 100%;
`;

function MainPage() {
  return (
    <Container>
      <Main>
        <Search />
      </Main>
    </Container>
  );
}

export default MainPage;
