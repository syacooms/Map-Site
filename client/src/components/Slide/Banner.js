import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';

const Container = styled.section`
  width: 100%;
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

const ImageContainer = styled.div`
  margin: 0 50px;
`;

const Image = styled.img`
  width: inherit;
  max-height: 200px;
`;

const items = [
  { id: 1, url: img1 },
  { id: 2, url: img2 },
  { id: 3, url: img3 },
  { id: 4, url: img4 },
  { id: 5, url: img5 },
];

function Banner() {
  const settings = {
    // 아래 dots
    dots: true,
    // 마지막 슬라이드에서 처음 슬라이스로
    infinite: true,
    speed: 1000,
    // 화살표
    arrows: true,
    // 한번에 스크롤 몇개 보여줌
    slidesToShow: 2,
    // 스크롤 할 때 마다 몇개 씩
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    pauseOnHover: true,
    fade: true,

    appendDots: (dots) => (
      <div
        style={{
          padding: '50px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        {items.map((item) => {
          return (
            <div key={item.id}>
              {/* <ImageContainer> */}
              <Image src={item.url} />
              {/* </ImageContainer> */}
            </div>
          );
        })}
      </StyledSlider>
    </Container>
  );
}

export default Banner;
