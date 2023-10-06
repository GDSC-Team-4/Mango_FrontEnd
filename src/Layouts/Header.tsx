import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    width: 100%;
    height: 95vh;
    background-image: url(${require('../img/Rectangle.png')});
    background-size: cover;
    background-position: center; // Ensure the image is always in the center
    display: flex;
    justify-content: center;
    align-items: center;
 `;

const LogoPosition = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size:1.5rem;
    color: #FCFDF2;
    position :fixed ;
    top :1rem ;
    left :1rem ;
    width:15vh;
    height:8vh;
`; 

const ImageBox = styled.div`
    width:50vw;
    height:15vw;
    display: flex;
    justify-content: right;
    align-items: right;
    
`;

const TextBox = styled.span`
    /* 이제 작성할 내용 */
`;

const SearchBar = styled.input`
   padding: 1vh;
   font-size: 1rem;
   border: none; // Remove all borders
   border-bottom: 0.1rem solid #777777; // Add bottom border only
   display:flex;
   float: center;
   width: 25vw; /* adjust as needed */
   background: transparent; // Make the background transparent
`;


const SearchButton = styled.button`
    float:left;
    width:8vw;
    height:5vh;
    background:#767676; 
    color:white; 
    font-size:1em; 
    border:none; 
    cursor:pointer;
    border-radius:10vh;
    backdrop-filter: blur(0.5vw);
    background: rgba(252, 253, 242, 0.2);
`;

export const Header = () => {
    
    return (
        <HeaderContainer>
            <LogoPosition>GRAPE<br/>&nbsp;&nbsp;PLATE</LogoPosition>
            
            <SearchBar type="text" placeholder="지역, 식당 또는 음식" />
            <SearchButton type="submit">검색</SearchButton>
            <ImageBox><img src="https://picsum.photos/400" /></ImageBox> 
        </HeaderContainer>
    );
}

