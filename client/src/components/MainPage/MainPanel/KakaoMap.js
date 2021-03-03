import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
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

    //first 마커가 표시 될 위치
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

    //! first 인포 윈도우 영역
    // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다.
    let iwContent = '<div style="padding:5px;">서식지 🔧💻🪓 </div>';

    // 인포윈도우 표시 위치입니다.
    let iwPosition = new kakao.maps.LatLng(
      37.55333228447413,
      127.08821613106849,
    );
    // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
    let iwRemoveable = true;

    // 인포윈도우를 생성하고 지도에 표시합니다
    let infowindow = new kakao.maps.InfoWindow({
      map: map, // 인포윈도우가 표시될 지도
      position: iwPosition,
      content: iwContent,
      removable: iwRemoveable,
    });

    // 마커 위에 인포윈도우를 표시
    infowindow.open(map, marker);
    // 여기까지 시작 시 작업

    // 검색 마커 표시영역
    // 장소
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(searchPlace, placesSearchCB);

    // 검색 데이터 받아오는 함수
    function placesSearchCB(data, status, pagination) {
      // 받아옴? ok?
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        //DATA ARRAY 담아주기
        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        //좌표 SET
        map.setBounds(bounds);
      }
    }

    //마커들 표시
    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });
      // 마커들에 클릭이벤트를 등록
      kakao.maps.event.addListener(marker, 'click', function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출
        infowindow.setContent(
          '<div style="padding:5px; font-size:15px;">' +
            place.place_name +
            '</div>',
        );
        infowindow.open(map, marker);
      });
    }
  }, [
    kakao.maps.InfoWindow,
    kakao.maps.LatLng,
    kakao.maps.LatLngBounds,
    kakao.maps.Map,
    kakao.maps.Marker,
    kakao.maps.event,
    kakao.maps.services.Places,
    kakao.maps.services.Status.OK,
    searchPlace,
  ]);

  return (
    <Container>
      <div
        id="map"
        style={{ margin: '0 auto', width: '92%', height: '100vh' }}
      />
    </Container>
  );
}

export default KakaoMap;
