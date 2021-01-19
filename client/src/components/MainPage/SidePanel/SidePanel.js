import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Container = styled.aside`
  margin-left: 1vw;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
`;

function SidePanel() {
  return (
    <Container>
      <h2>Panel</h2>
      <Menu>
        header
        <FontAwesomeIcon icon={faCaretDown} />
      </Menu>
      <Menu>
        title
        <FontAwesomeIcon icon={faCaretDown} />
      </Menu>
      <Menu>
        footer
        <FontAwesomeIcon icon={faCaretDown} />
      </Menu>
    </Container>
  );
}

export default SidePanel;
