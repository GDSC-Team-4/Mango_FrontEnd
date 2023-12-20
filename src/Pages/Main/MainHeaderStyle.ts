import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export const MainContainer = styled.header`
  width: 100%;
  height: 95vh;
  background-image: url(${require("../../img/Rectangle.png")});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 85vh;
    padding-top: 15rem;
  }
`;

export const ImageBox = styled.div`
  width: 45vw;
  height: 54.5vh;
  display: flex;
  justify-content: right;
  align-items: right;
  margin-top: 1.5vw;
  margin-left: -15vw;
`;

export const Box = styled.div`
  display: block;
  margin-left: 5vw;
  margin-top: 7vw;
`;

export const TextBox = styled.span`
  height: 35vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  @media (max-height: 1024px) {
    margin-bottom: -2vw;
    margin-top:2.5vw;
  }
`;

export const TitleText = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 3em;
  height: 2.5em;
  line-height: 3em;
  color: #fcfdf2;
  @media (max-width: 1024px) {
    font-size: 2.5em;
    line-height: 2.5em;
  }
  @media (min-width: 768px) {
    font-size: 2em;
    line-height: 1.5em;
    height: 2em;
  }
`;

export const SubText = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.3em;
  line-height: 1.5em;
  color: #fcfdf2;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchIcon = styled(AiOutlineSearch)`
    color: #969696;
    width:3vw;
    height:5vh;
    margin-right:-2.7vw;
`;

export const SearchBar = styled.input`
   padding: 1vh; 
   margin-right:-0.1vw;
   font-size: 1.4rem;
   border: none; 
   border-bottom: 0.1rem solid #777777; 
   display:flex;
   float: center;
   width: 30vw; 
   height:3.5vh;
   background: transparent; 
   text-indent: 2.2vw;
   color: #777777;
   &:focus {
    outline:none;
}
`;

export const SearchButton = styled.button`
  float: left;
  width: 9vw;
  height: 6vh;
  background: #767676;
  color: white;
  font-size: 1.3em;
  border: none;
  cursor: pointer;
  border-radius: 1vh;
  backdrop-filter: blur(0.5vw);
  background: rgba(252, 253, 242, 0.2);
`;