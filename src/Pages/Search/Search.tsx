import React,{useRef, useState} from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import styled from "styled-components";
import {AiOutlineSearch,} from "react-icons/ai";
import {HiArrowRightCircle} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import SearchProps from "../../Interface/Search";
import { SearchDto } from "../../Interface/Search";
import { SearchData } from "../../Interface/Search";
import { searchDataState } from "../../Atom/Search";
import axiosInstance from "../../Api/axios";

const dummyPlaces: SearchDto[] = [
    {
        id: 1,
        placeName: '미성옥',
        roadAddressName: '서울특별시 마포구 합정동 123-45',
        placeUrl: 'https://place.map.kakao.com/1234567890',
        reviewPoint:4.6
      },
      {
        id: 2,
        placeName: '육전식당',
        roadAddressName: '서울특별시 마포구 합정동 67-89',
        placeUrl: 'https://place.map.kakao.com/2345678901',
        reviewPoint:4.6
      },
      {
          id:3,
          placeName:'합정떡볶이', 
          roadAddressName:'서울특별시 마포구 합정동 987-65', 
          placeUrl:'https://place.map.kakao.com/3456789012',
          reviewPoint:4.6
      },
      {
          id:4, 
          placeName:'합정김밥천국', 
          roadAddressName:'서울특별시 마포구 합정동 543-21', 
          placeUrl:'https://place.map.kakao.com/4567890123',
          reviewPoint:4.6
      },
      {
          id:5, 
          placeName:'합정돈까스집', 
          roadAddressName:'서울특별시 마포구 합정동 321-54', 
          placeUrl:'https://place.map.kakao.com/5678901234',
          reviewPoint:4.6
      },
];
  

const SearchContainer = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;

    @media (max-width: 768px) {
        height: 85vh; 
        padding-top:15rem; 
    }
`;
const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-height: 768px) {
        margin-top:8vw;
    }
`;

const TextBox = styled.p`
    width: 80vw;
    height: 4vh;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 2.6rem;
    line-height: 4vh;
    text-align: center;
    color: #000000;
    letter-spacing: -0.15em;
    margin-bottom:4vw;
`;

const SearchBox = styled.div`
    display:flex;
    align-items: center;
    background: #FFFFFF;
    width: 60vw;
    height: 10vh;
    box-shadow: 0 0.4vw 4.2vh rgba(0, 0, 0, 0.25);
    border-radius: 8vw;
    cursor: pointer;
`;

const SearchIcon = styled(AiOutlineSearch)`
    color:#3B3486;
    width:2.7vw;
    height:9.9vh;
    align-items: center;
    margin-left:1.5vw;
`;

const SearchBar = styled.input`
    border:none;
    background: #FFFFFF;
    height:9vh;
    width: 50vw;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 1.3rem;
    margin-left:3vw;
    margin-right:-1.5vw;
    cursor: pointer;
    &:focus {
        outline:none;
    }
`;

const SearchButton = styled(HiArrowRightCircle)`
    width:5vw;
    height:8.5vh;
    color:#3B3486;
`;

const SubTitle = styled.p`
    width: 68vw;
    height: 4.2vh;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 1.663em;
    line-height: 1.875em;
    margin-top: 8vw;
`;

const RactangleBox = styled.div`
    display:flex;
    justify-content: space-between;
    width: 68vw;
`;

const ColumnBox = styled.div`
    display:block;
`;

const RandomRactangle = styled.div<SearchProps>`
    display: grid;
    width: ${props => props.width}vw;
    height: ${props => props.height}vh;
    background-image: url(${props => props.imageURL});
    margin:0.5vw;
    border-radius: 4.2vh;
    filter: drop-shadow(0vw 0.3vw 0.65vw rgba(0, 0, 0, 0.1));
`;

const SubRactangle = styled.div<SearchProps>`
    display:flex;
    
    width: 90%;
    height: ${props => props.height}vh;
    align-self: end;
    justify-self: center;
    background: rgba(252, 253, 242, 0.7);
    backdrop-filter: blur(1.5vh);
    border-radius: 1.4vh;
    margin-bottom:5%;
`;

const RactTitle = styled.p`
    width: 60%;
    height: 1.7vh;
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 0.625rem;
    color: #000000;
    margin-left:1vw;
`;

const ReviewPoint = styled.p`
    width: 30%;
    height: 1.8vh;
    text-align:right;
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 400;
    color: #7743DB;
    font-size:1.1rem;
    line-height:0.325rem;
`;

export const SearchPage = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const [search,setSearch] = useRecoilState(searchDataState);
        
    const searchButtonClick = async (event: React.MouseEvent) => {
        event.stopPropagation();
        if(searchRef.current) {
            const searchValue = searchRef.current.value;
            if (!searchValue.trim()) {
                alert('검색어를 입력해주세요.');
                return;
            }
            try {
                const response = await axiosInstance.get(`map/search?query=${searchValue}`);
                console.log(response.data.id);
                navigate('/SearchPage');  
            } catch (error) {
                console.error('오류가 발생했습니다: ', error); 
            }
        }   
    }
    
    const handleSearchClick = () => {
        if(searchRef.current) {
            searchRef.current.focus();
        }     
    }

    

    return (
        <>
            <SearchContainer>
                <Box>
                    <TextBox>
                    지역, 식당 또는 음식으로 검색해 나만의 맛집을 찾아보세요!
                    </TextBox>
                    <SearchBox onClick={handleSearchClick}>
                        <SearchIcon/>
                        <SearchBar type="text" placeholder="지역, 식당 또는 음식" ref={searchRef}/>
                        <SearchButton onClick={searchButtonClick}>검색</SearchButton>
                    </SearchBox>
                    <SubTitle>
                        "합정역 맛집"
                    </SubTitle>
                    <RactangleBox>
                        <RandomRactangle width={24} height={50} imageURL='https://picsum.photos/400/500'>
                            <SubRactangle width={0} height={7} imageURL="">
                                <RactTitle>{dummyPlaces[0].placeName}</RactTitle>
                                <ReviewPoint>{dummyPlaces[0].reviewPoint}</ReviewPoint>
                            </SubRactangle>
                        </RandomRactangle>
                        <ColumnBox>
                            <RandomRactangle width={21} height={33} imageURL='https://picsum.photos/370/240'>
                                <SubRactangle width={0} height={7} imageURL="">
                                    <RactTitle>{dummyPlaces[1].placeName}</RactTitle>
                                    <ReviewPoint>{dummyPlaces[1].reviewPoint}</ReviewPoint>
                                </SubRactangle>
                            </RandomRactangle>
                            <RandomRactangle width={21} height={17} imageURL='https://picsum.photos/370/150'>
                                <SubRactangle width={0} height={7} imageURL="">
                                    <RactTitle>{dummyPlaces[2].placeName}</RactTitle>
                                    <ReviewPoint>{dummyPlaces[2].reviewPoint}</ReviewPoint>
                                </SubRactangle>
                            </RandomRactangle>
                        </ColumnBox>
                        <ColumnBox>
                            <RandomRactangle width={24} height={16} imageURL='https://picsum.photos/400/180'>
                                <SubRactangle width={0} height={7} imageURL="">
                                    <RactTitle>{dummyPlaces[3].placeName}</RactTitle>
                                    <ReviewPoint>{dummyPlaces[3].reviewPoint}</ReviewPoint>
                                </SubRactangle>
                            </RandomRactangle>
                            <RandomRactangle width={24} height={34} imageURL='https://picsum.photos/400/300'>
                                <SubRactangle width={0} height={7} imageURL="">
                                    <RactTitle>{dummyPlaces[4].placeName}</RactTitle>
                                    <ReviewPoint>{dummyPlaces[4].reviewPoint}</ReviewPoint>
                                </SubRactangle>
                            </RandomRactangle>
                        </ColumnBox>
                    </RactangleBox>
                    <RactangleBox>
                        <ColumnBox>
                            <RandomRactangle width={17} height={33} imageURL='https://picsum.photos/330/360'>
                                <SubRactangle width={0} height={7} imageURL="">
                                    <RactTitle>{dummyPlaces[4].placeName}</RactTitle>
                                    <ReviewPoint>{dummyPlaces[4].reviewPoint}</ReviewPoint>
                                </SubRactangle>
                            </RandomRactangle>
                            <RandomRactangle width={17} height={17} imageURL='https://picsum.photos/330/180'>
                                <SubRactangle width={0} height={7} imageURL="">
                                    <RactTitle>미성옥</RactTitle>
                                </SubRactangle>
                            </RandomRactangle>
                        </ColumnBox>
                        <ColumnBox>
                            <RandomRactangle width={27} height={16} imageURL='https://picsum.photos/500/230'>
                                <SubRactangle width={0} height={7} imageURL="">
                                    <RactTitle>미성옥</RactTitle>
                                </SubRactangle>
                            </RandomRactangle>
                            <RandomRactangle width={27} height={34} imageURL='https://picsum.photos/500/390'>
                                <SubRactangle width={0} height={7} imageURL="">
                                    <RactTitle>미성옥</RactTitle>
                                </SubRactangle>
                            </RandomRactangle>
                        </ColumnBox>
                        <RandomRactangle width={24} height={50} imageURL='https://picsum.photos/410/430'>
                                <SubRactangle width={0} height={7} imageURL="">
                                    <RactTitle>미성옥</RactTitle>
                                </SubRactangle>
                            </RandomRactangle>
                    </RactangleBox>
                </Box>
            </SearchContainer>
        </>
    );
};