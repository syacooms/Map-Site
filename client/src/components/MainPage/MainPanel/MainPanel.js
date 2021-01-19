import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-color: red;
`;

const Piece = styled.div`
  background-color: yellow;
  height: 400px;
`;

function MainPanel() {
  return (
    <Container>
      <h1>
        Assembly
        <hr />
      </h1>

      <section>
        <Piece>작업물 위치</Piece>
        <div>
          <button>SAVE 저장버튼</button>
        </div>
      </section>
    </Container>
  );
}

export default MainPanel;
