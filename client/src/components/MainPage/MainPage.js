import React from 'react';
import styled from 'styled-components';
import MainPanel from './MainPanel/MainPanel';

const Container = styled.section`
  display: flex;
  background-color: #f4f5fa;
`;

// const Side = styled.section`
//   width: 200px;
// `;

const Main = styled.section`
  width: 100%;
`;

function MainPage() {
  return (
    <Container>
      <Main>
        <MainPanel />
      </Main>
      {/* <Side>
        <SidePanel />
      </Side> */}
    </Container>
  );
}

export default MainPage;
