import React, { useRef } from "react";
import { PhotoBox,PhotoIcon } from "./ReviewStyle";
import { Review } from "../../Interface/Review";

export const ImageUpload = ({ setImageFile }: { setImageFile: React.Dispatch<React.SetStateAction<File | null>> }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
  
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
  
      setImageFile(file);
    };
  
    const handleChangeImageClick = () => {
      if (fileInputRef.current) fileInputRef.current.click();
    };
  
    return (
      <>
        <label>
          <PhotoBox onClick={handleChangeImageClick}>
            <PhotoIcon/> 사진 등록하기
          </PhotoBox>
          <input 
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </label>
      </>
    );
  };