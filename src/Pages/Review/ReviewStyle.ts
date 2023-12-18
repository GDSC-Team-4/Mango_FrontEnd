import styled from "styled-components";
import { ReviewPorps } from "../../Interface/Review";

export const ReviewContainer = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content:left;
    align-items:center;
    padding-bottom: 3vw;
    @media (max-width: 768px) {
        height: 85vh; 
        padding-top:15rem; 
    }
`;

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left:5.3vw;
    @media (min-height: 768px) {
        margin-top:8vw;
    }
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Line = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const PlaceTitle = styled.p`
    width: 13.25rem;
    height: 3rem;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 2.5rem;
    line-height: 3rem;
    color: #000000;
    text-align: left;
`;

export const SubText = styled.p`
    width: 20vw;
    height:1.5rem;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-bottom:0;
    color: #000000;
`;

export const StarPoint = styled.div<{ selected: boolean }>`
    display: flex;
    box-sizing: border-box;
    width: 10vw;
    height: 5vh;
    border: 1px solid #969696;
    background-color: ${(props) => props.selected ? 'rgba(204,224,224,1)' : ''};
    filter: drop-shadow(0px 0.26vw 0.65vw rgba(0, 0, 0, 0.2));
    border-radius: 0.65vw;
    margin-left:0.65vw;
    margin-right:0.65vw;
    &:hover {
        cursor: pointer;
    }
`;

export const StarText = styled.p`
    width:100%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 0.7rem;
    text-align: center;
    color: #767676;
`;