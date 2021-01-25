import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
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
      <div>표시</div>

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
