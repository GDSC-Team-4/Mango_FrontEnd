import styled from "styled-components";
import {AiOutlineSearch,} from "react-icons/ai";
import {HiArrowRightCircle} from "react-icons/hi2";
import SearchProps from "../../Interface/Search";

export const SearchContainer = styled.div`
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

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media (min-height: 768px) {
        margin-top:8vw;
    }
`;

export const TextBox = styled.p`
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

export const SearchBox = styled.div`
    display:flex;
    align-items: center;
    background: #FFFFFF;
    width: 60vw;
    height: 10vh;
    box-shadow: 0 0.4vw 4.2vh rgba(0, 0, 0, 0.25);
    border-radius: 8vw;
    cursor: pointer;
`;

export const SearchIcon = styled(AiOutlineSearch)`
    color:#3B3486;
    width:2.7vw;
    height:9.9vh;
    align-items: center;
    margin-left:1.5vw;
`;

export const SearchBar = styled.input`
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

export const SearchButton = styled(HiArrowRightCircle)`
    width:5vw;
    height:8.5vh;
    color:#3B3486;
`;

export const SubTitle = styled.p`
    width: 68vw;
    height: 4.2vh;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 1.663em;
    line-height: 1.875em;
    margin-top: 8vw;
`;

export const RactangleBox = styled.div`
    display:flex;
    justify-content: space-between;
    width: 68vw;
`;

export const ColumnBox = styled.div`
    display:block;
`;

export const RandomRactangle = styled.div<SearchProps>`
    display: grid;
    width: ${props => props.width}vw;
    height: ${props => props.height}vh;
    background-image: url(${props => props.imageURL});
    margin:0.5vw;
    border-radius: 4.2vh;
    filter: drop-shadow(0vw 0.3vw 0.65vw rgba(0, 0, 0, 0.1));
`;

export const SubRactangle = styled.div<SearchProps>`
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

export const RactTitle = styled.p`
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

export const ReviewPoint = styled.p`
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