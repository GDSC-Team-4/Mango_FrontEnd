import {
  EditorBox,
  EditorContainer,
  EditorSlider,
  EditorStoreTitle,
  EditorTitle,
  SubEditorBox,
} from "./StyledSlider";
import { randomImg } from "./MainImg";
import { ColumnBox } from "../../Search/SearchStyle";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EditorDataState } from "../../../Atom/Main";
import { selectedRestaurantState } from "../../../Atom/Search";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isValidImage } from "./StoreListSlider";
import constant from "../ConstantMain";
import { SearchResult } from "../../../Interface/Search";

export const StoreEditorSlider = () => {
  const editorData = useRecoilValue(EditorDataState);
  const setSelectedRestaurant = useSetRecoilState(selectedRestaurantState);
  const navigation = useNavigate();
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(false);
  };

  const handleMouseMove = () => {
    setIsDragging(true);
  };

  const handleMouseUp = (item: SearchResult) => {
    if (isDragging) return; // 드래그 중이면 클릭 이벤트를 리턴(방지)함
    setSelectedRestaurant(item);
    navigation("/SearchDetailPage");
  };

  useEffect(() => {
    // 이미지 URL 유효성 검사를 비동기로 처리
    Promise.all(
      editorData.map(async (item, index) => {
        const isValid = await isValidImage(item.imageUrl);
        return isValid ? item.imageUrl : randomImg[index].imageurl;
      })
    ).then((urls) => {
      setImageUrls(urls); // 검사된 URL들을 상태에 저장
    });
  }, [editorData]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <EditorContainer>
        <EditorTitle>{constant.TEXT.YEOKGOK}</EditorTitle>
      </EditorContainer>
      <ColumnBox>
        <EditorSlider {...settings}>
          {editorData.map((item, index) => (
            <EditorBox
              width={350}
              height={200}
              key={index}
              imageURL={imageUrls[index]}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={() => handleMouseUp(item)}
            >
              <SubEditorBox width={0} height={50} imageURL="">
                <EditorStoreTitle>{item.placeName}</EditorStoreTitle>
              </SubEditorBox>
            </EditorBox>
          ))}
        </EditorSlider>
      </ColumnBox>
    </>
  );
};
