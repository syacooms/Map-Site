import React, { useState } from 'react';
import styled from 'styled-components';
import KakaoMap from './KakaoMap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const SearchForm = styled.form`
  height: 100px;
  width: 1024px;
  margin: 0 auto;
`;

const Title = styled.h2`
  position: relative;
  top: 5px;
  margin: auto;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const Map = styled.div`
  height: 400px;
`;

const Input = styled.input`
  position: relative;
  margin: 0 auto;
  border-radius: 22px;
  padding-left: 15px;
  top: 30px;
  height: 30px;
  width: 100%;
  border: 2px solid #222;
  text-align: left;
`;

const Button = styled.button`
  position: relative;
  background: transparent;
  margin: auto;
  border: 0;
  outline: 0;
  width: 5%;
  height: 35px;
  bottom: 5px;
  left: 980px;
  cursor: pointer;
`;

function MainPanel() {
  const [inputText, setInputText] = useState('');
  const [place, setPlace] = useState('');

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText('');
    //console.log(inputText);
  };

  return (
    <Container>
      <Title>Search</Title>
      <SearchForm onSubmit={handleSubmit}>
        <Input
          title="검색어 입력"
          id="keyword"
          placeholder="검색어를 입력해주세요."
          onChange={onChange}
          value={inputText}
        />
        <Button>
          <FontAwesomeIcon icon={faSearch} size="2x" />
        </Button>
      </SearchForm>
      <Map>
        <KakaoMap searchPlace={place} />
      </Map>
    </Container>
  );
}

export default MainPanel;
