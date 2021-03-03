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
  position: relative;
  height: 200px;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.h2`
  position: absolute;
  padding-top: 30px;
  left: 45%;
  margin: 0 auto;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 45px;
`;

const Map = styled.div``;

const Input = styled.input`
  position: absolute;
  margin: 0 auto;
  border-radius: 22px;
  padding-left: 15px;
  top: 50%;
  left: 10%;
  height: 30px;
  width: 80%;
  border: 2px solid #222;
  text-align: left;
`;

const Button = styled.button`
  position: absolute;
  background: transparent;
  margin: auto;
  border: 0;
  outline: 0;
  right: 10%;
  top: 52%;
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
      <SearchForm onSubmit={handleSubmit}>
        <Title>Search</Title>
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
