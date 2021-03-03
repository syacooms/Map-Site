import React from 'react';
import styled from 'styled-components';
import Search from './MainPanel/Search';
import Banner from '../Slide/Banner';

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Slide = styled.section`
  width: 100%;
  height: 200px;
`;

const Main = styled.section`
  width: 100%;
`;

function MainPage() {
  return (
    <Container>
      <Slide>
        <Banner />
      </Slide>
      <Main>
        <Search />
      </Main>
    </Container>
  );
}

export default MainPage;
