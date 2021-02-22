import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: black;
`;

function KakaoMap({ searchPlace }) {
  const { kakao } = window;

  useEffect(() => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(37.55333228447413, 127.08821613106849),
      level: 3,
    };

    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(
      37.55333228447413,
      127.08821613106849,
    );

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);

    // // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성
    // // 인포윈도우에 표출될 내용
    // //인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
    // var iwContent =
    //     '<div style="padding:5px;">' + searchPlace.place_name + '</div>',
    //   iwRemoveable = true;

    // // 인포윈도우를 생성
    // var infowindow = new kakao.maps.InfoWindow({
    //   content: iwContent,
    //   removable: iwRemoveable,
    // });

    // // 마커에 클릭이벤트를 등록
    // kakao.maps.event.addListener(marker, 'click', function () {
    //   // 마커 위에 인포윈도우를 표시
    //   infowindow.open(map, marker);
    // });

    // places
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchPlace, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      // ok?
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
      }
    }

    //markers
    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });
    }
  }, [searchPlace]);

  return (
    <Container>
      <div id="map" style={{ width: '100%', height: '100vh' }} />
    </Container>
  );
}

export default KakaoMap;
