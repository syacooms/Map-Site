import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const Title = styled.h2`
  margin: auto;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const Piece = styled.div`
  background-color: yellow;
  height: 400px;
`;

const Input = styled.input`
  margin: auto;
  border-radius: 5px;
  width: 20%;
`;

const Button = styled.button`
  position: relative;
  margin: auto;
  border-radius: 5px;
  width: 5%;
  bottom: 20px;
  left: 180px;
`;

function MainPanel() {
  const { kakao } = window;

  // const getData = async () => {
  //   try {
  //     const response = await axios.get(`https://api.covid19api.com/summary`);

  //     //data 변수로 만들기
  //     const datas = response.data;
  //     //data 하나만 가져오기.. 이건 좀 더 생각해야..할 듯 `{}` 이런식으로?

  //     console.log(datas);
  //     setData(datas);
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    // eslint-disable-next-line no-unused-vars
    var map = new kakao.maps.Map(container, options);
  }, [kakao.maps.LatLng, kakao.maps.Map]);

  return (
    <Container>
      <Title>Search</Title>
      <Input placeholder="검색어를 입력해주세요." />
      <Button>Click</Button>
      <Piece id="map" />
    </Container>
  );
}

export default MainPanel;
