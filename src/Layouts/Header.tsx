import React from 'react';
import styled from 'styled-components';
import { useNavigate,useLocation } from 'react-router-dom';
import {BsPersonCircle} from 'react-icons/bs';

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

const TextPosition = styled.div`
    width: 75vw;
    height: 2vw;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 1.2vw;
    line-height: 1.4vw;
    display:flex;
    justify-content:right;
    color: ${props => props.color};
`; 

const TextPosition1 = styled.div`
    width: 8vw;
    height: 2vw;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 1.2vw;
    line-height: 1.4vw;
    display:flex;
    justify-content:right;
    color: ${props => props.color};
`; 

const ClickIcon = styled(BsPersonCircle)`
  color: #FCFDF2;
  width: 8vw;
  height: 2vw;
  display:flex;
  justify-content:right;
  margin-right:-1vw;
  margin-left:2vw;
  margin-bottom:0.3vw;
`;
export const Header = () => {
    const navigation = useNavigate();
    const location = useLocation();
    let color;

    const onClick = () =>{
        navigation('/RegisterPage');
    }
    
    switch(location.pathname) {
        case '/SearchPage':
            color = '#3B3486';
           // background-color = '#F5EBFF';
            break;
         default:
            color = '#FCFDF2'; 
           // background-color: '#25252D';
      }
  
    return (
        <>
            <HeaderContainer>
            <LogoPosition color={color}>GRAPE<br/>&nbsp;&nbsp;PLATE</LogoPosition>
            <TextPosition color={color}>Hot list</TextPosition>
            <TextPosition1 color={color}>Story</TextPosition1>
            <ClickIcon/>
            </HeaderContainer>
        </>
    );
}

