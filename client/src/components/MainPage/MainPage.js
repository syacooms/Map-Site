import React from 'react';
import styled from 'styled-components';
import MainPanel from './MainPanel/MainPanel';
import SidePanel from './SidePanel/SidePanel';

const Container = styled.section`
  display: flex;
  background-color: #f4f5fa;
`;

const Side = styled.div`
  width: 200px;
`;

const Main = styled.div`
  width: 1000px;
`;

function MainPage() {
  return (
    <Container>
      <Main>
        <MainPanel />
      </Main>
      <Side>
        <SidePanel />
      </Side>
    </Container>
  );
}

export default MainPage;
