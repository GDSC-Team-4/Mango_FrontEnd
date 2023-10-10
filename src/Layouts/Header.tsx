import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const HeaderContainer = styled.header`
    width: 100%;
    height: 10vh;
    background-color: #25252D;
    oparity: 0.4;
    display: flex;
    justify-content: center;
    align-items: center;
 `;

const LogoPosition = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size:1.5rem;
    color: ${props => props.color};
    position :fixed ;
    top :1rem ;
    left :1rem ;
    width:15vh;
    height:8vh;
`; 



export const Header = () => {
    const location = useLocation();
    let color;

    switch(location.pathname) {
        case '/SearchPage':
            color = '#3B3486';
            break;
         default:
            color = '#FCFDF2'; 
      }

    return (
        <>
            <HeaderContainer>
            <LogoPosition color={color}>GRAPE<br/>&nbsp;&nbsp;PLATE</LogoPosition>
            </HeaderContainer>
        </>
    );
}

