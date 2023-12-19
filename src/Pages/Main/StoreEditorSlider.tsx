import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { randomImg } from "./MainImg";
import {
  ColumnBox,
  RactTitle,
  RandomRactangle,
  ReviewPoint,
  SubRactangle,
} from "../Search/SearchStyle";
import { StorySlider } from "./StoreStorySlider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Title = styled.span`
  margin-top: 10vh;
  font-size: 25px;
  font-weight: 600;
`;

const EditorBox = styled(RandomRactangle)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: relative;
  border-radius: 20px;
`;

const SubEditorBox = styled(SubRactangle)`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: ${(props) => props.height}px;
`;

export const EditorSlider = styled(StorySlider)``;

export const StoreEditorSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <Container>
        <Title>에디터가 선정한 식당</Title>
      </Container>
      <ColumnBox>
        <EditorSlider {...settings}>
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <EditorBox
              width={350}
              height={200}
              key={i}
              imageURL={randomImg[i].imageURL}
            >
              <SubEditorBox width={0} height={50} imageURL="">
                <RactTitle>미성옥</RactTitle>
                <ReviewPoint>4.6</ReviewPoint>
              </SubEditorBox>
            </EditorBox>
          ))}
        </EditorSlider>
      </ColumnBox>
    </>
  );
};
