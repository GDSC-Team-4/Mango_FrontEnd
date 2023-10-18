import React,{useRef} from "react";
import styled from "styled-components";
import {AiOutlineSearch,} from "react-icons/ai";
import {HiArrowRightCircle} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import SearchProps from "../../Interface/Search";

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
    height:10vh;
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

const RandomRactangle = styled.div<SearchProps>`
    width: ${props => props.width}vw;
    height: ${props => props.height}vh;
    background-image: url('https://picsum.photos/300/400');
    margin:0.5vw;
    border-radius: 4.2vh;
    filter: drop-shadow(0vw 0.3vw 0.65vw rgba(0, 0, 0, 0.1));
`;

export const SearchPage = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const searchButtonClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        navigate('/SearchPage');    
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
                    <RandomRactangle width={Math.floor(Math.random() * (40 - 30 + 1) + 30)} 
                                         height={Math.floor(Math.random() * (40 - 30 + 1) + 50)}/>
                    <RandomRactangle width={Math.floor(Math.random() * (40 - 30 + 1) + 30)} 
                                         height={Math.floor(Math.random() * (40 - 30 + 1) + 40)} />
                    <RandomRactangle width={Math.floor(Math.random() * (40 - 30 + 1) + 30)} 
                                         height={Math.floor(Math.random() * (40 - 30 + 1) + 40)}/>
                    </RactangleBox>
                    <RactangleBox>
                    <RandomRactangle width={Math.floor(Math.random() * (40 - 30 + 1) + 30)} 
                                         height={Math.floor(Math.random() * (40 - 30 + 1) + 40)} />                    
                    <RandomRactangle width={Math.floor(Math.random() * (40 - 30 + 1) + 30)} 
                                         height={Math.floor(Math.random() * (40 - 30 + 1) + 40)}/>
                </RactangleBox>
                </Box>
            </SearchContainer>
        </>
    );
};