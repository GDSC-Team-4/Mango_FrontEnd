import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Box = styled.div`
  background-color: black;
  width: 350px;
  height: 300px;
  border-radius: 10px;
`;

export const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <Box key={i}>{i}</Box>
        ))}
      </Slider>
    </div>
  );
};
