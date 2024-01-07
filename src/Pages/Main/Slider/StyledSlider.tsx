import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import {
  RactTitle,
  RandomRactangle,
  SubRactangle,
} from "../../Search/SearchStyle";

export const Container = styled.div`
  margin-top: 10vh;
  margin-left: 20vw;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 350px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
  height: 400px;
  margin-right: 5vw;
  gap: 4vh;
`;

export const Title = styled.span`
  font-size: 25px;
  font-weight: 600;
`;

export const Text = styled.span`
  font-size: 18px;
`;

export const Store = styled.div<{ imageurl: string }>`
  background-image: url(${(props) => props.imageurl});
  background-size: cover;
  width: 350px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const StoreTextBox = styled.div`
  background-color: #25252d;
  color: #fff;
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
`;

export const StoreTitle = styled.span`
  position: absolute;
  top: 25px;
  left: 25px;
  font-size: 16px;
`;

export const StoreText = styled(StoreTitle)`
  font-size: 14px;
  top: 50px;
`;

export const Button = styled.button`
  width: 148px;
  height: 47px;
  background: rgba(17, 17, 17, 0.2);
  font-size: 16px;
  border: none;
  border-radius: 100px;
  cursor: pointer;
`;

export const StyledSlider = styled(Slider)`
  height: 400px;
  overflow: hidden;

  .slick-list {
    height: 100%;
    margin: 0 -20px;
    box-sizing: border-box;
  }

  .slick-slide > div {
    margin: 0 20px;
  }
`;

export const StoryContainer = styled(Container)<{ bgImg: string }>`
  flex-direction: column;
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  height: 500px;
  margin-left: 0;
`;

export const StoryTextBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StoryTitle = styled(Title)`
  margin-top: 38px;
  margin-left: 70px;
`;

export const StoryButton = styled(Button)`
  margin-top: 38px;
  margin-left: 70px;
  cursor: pointer;
`;

export const StorySlider = styled(StyledSlider)`
  margin-top: 15px;
`;

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const EditorTitle = styled.span`
  margin-top: 10vh;
  font-size: 25px;
  font-weight: 600;
`;

export const EditorStoreTitle = styled(RactTitle)`
  display: flex;
  justify-content: center;
`;

export const EditorBox = styled(RandomRactangle)`
  display: flex;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: relative;
  border-radius: 20px;
  background-size: cover;
`;

export const SubEditorBox = styled(SubRactangle)`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: ${(props) => props.height}px;
  text-align: center;
  justify-content: center;
`;

export const EditorSlider = styled(StorySlider)``;
