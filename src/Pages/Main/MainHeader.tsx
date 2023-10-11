import React from 'react';
import styled from 'styled-components';
import Rectangle3  from '../../img/Rectangle3.png';
import {AiOutlineSearch} from "react-icons/ai";
const HeaderContainer = styled.header`
    margin-top:-10rem;
    padding-top:10rem;
    width: 100%;
    height: 75vh;
    background-image: url(${require('../../img/Rectangle.png')});
    background-size: cover; 
    background-position:center;
    display:flex;
    justify-content:center;
    align-items:center;

    @media (max-width: 768px) {
        height: 50vh; 
        padding-top:5rem; 
 `;
 
const ImageBox = styled.div`
    width: 35vw;
    height: 41.5vh;
    display: flex;
    justify-content: right;
    align-items: right;
    
`;

const Box = styled.div`
    display: block;
    
`;

const TextBox = styled.span`
    height: 25vh;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top:3vw;
`;

const TitleText = styled.h1`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 2em; 
    height:2.5em;
    line-height:2.8em;
    color: #FCFDF2;
`;

const SubText = styled.p`
   font-family : 'Inter', sans-serif ;
   font-style : normal ;
   font-weight :400 ;
   font-size :1.2em ;
   line-height :1.4em;
   color : #FCFDF2 ;
`;

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SearchIcon = styled(AiOutlineSearch)`
  color: #969696;
  width:2vw;
  height:3vh;
  margin-right:-1.7vw;
`;

const SearchBar = styled.input`
   padding: 0.5vh; 
   margin-right:-0.1vw;
   font-size: 1.2rem;
   border: none; 
   border-bottom: 0.1rem solid #777777; 
   display:flex;
   float: center;
   width: 25vw; 
   height:3.5vh;
   background: transparent; 
   text-indent: 1.7vw;
`;

const SearchButton = styled.button`
    float:left;
    width:8vw;
    height:5vh;
    background:#767676; 
    color:white; 
    font-size:1.3em; 
    border:none; 
    cursor:pointer;
    border-radius:1vh;
    backdrop-filter: blur(0.5vw);
    background: rgba(252, 253, 242, 0.2);
`;


export const MainHeader = () => {
    
    return (
        <HeaderContainer>
            <Box>
                <TextBox>
                    <TitleText>포도플레이트</TitleText>
                    <SubText>솔직한 리뷰, 믿을 수 있는 평점!<br/> 포드플레이트에서 나만의 맛집을 찾아보세요.</SubText>
                </TextBox>
                <SearchContainer>
                    <SearchIcon/>
                    <SearchBar type="text" placeholder="지역, 식당 또는 음식" />
                    <SearchButton type="submit">검색</SearchButton>
                </SearchContainer>
            </Box>
            <ImageBox><img src={Rectangle3} /></ImageBox> 
        </HeaderContainer>
    );
}

