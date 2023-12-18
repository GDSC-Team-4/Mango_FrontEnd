import styled from "styled-components";
import Rectangle96 from '../../img/Rectangle96.png';
import Rectangle97 from '../../img/Rectangle97.png';
import Rectangle98 from '../../img/Rectangle98.png';
import Rectangle99 from '../../img/Rectangle99.png';
import { IoDocumentTextOutline } from "react-icons/io5";

const images = [Rectangle96, Rectangle97, Rectangle98, Rectangle99];

export const DetailContainer = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content:left;
    align-items:center;
    background-color: #25252D;
    padding-bottom: 3vw;
    @media (max-width: 768px) {
        height: 85vh; 
        padding-top:15rem; 
    }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin-left:5.3vw;
    @media (min-height: 768px) {
        margin-top:8vw;
    }
`;


export const DetailTitle = styled.p`
    width: 40vw;
    height:6.7vh
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 2.6rem;
    line-height:3.026rem
    text-align: left;
    color: rgba(252, 253, 242, 1);
    letter-spacing: -0.08em;
    
    margin-bottom:0;
`;

export const DetailText = styled.p`
    width: 40vw;
    height:3.3vh;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.513rem;
    margin-left:0.3vw;
    color: rgba(252, 253, 242, 1);
    letter-spacing: -0.03em;
    margin-bottom:0;
`;

export const ClickLinkText = styled(DetailText)`
    display:inline;
    &:hover {
        cursor: pointer;
    }
`;

export const SubText = styled.span`
    width: 10vw;
    height: 1.5rem;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: rgba(252, 253, 242, 0.6);
    padding-right:5vw;
`;

export const DetailView = styled.div`
    width:20vw;
    height:1.5vw;;
    box-sizing: border-box;
    border: 1px solid #FCFDF2;
    filter: drop-shadow(0px 0.26vw 0.65vw rgba(255, 255, 255, 0.25));
    color: rgba(252, 253, 242, 1);
    border-radius: 6.5vw;
    margin-left:-0.2vw;
    margin-top: 1.5vw;
    margin-bottom:2vw;
`;

export const ReviewView = styled.div`
    display:flex;
    width:15vw;
    height:2vw;
    box-sizing: border-box;
    border: 1px solid #FCFDF2;
    filter: drop-shadow(0px 0.26vw 0.65vw rgba(255, 255, 255, 0.25));
    color: rgba(252, 253, 242, 1);
    border-radius: 6.5vw;
    margin-left:-0.1vw;
    margin-top: 2.5vw;
`;

export const ViewText = styled.p`
    width: 4.26vw;
    height: 2vw;
    flex-shrink: 0;
    cursor:pointer;
    color: #FCFDF2;
    text-align:right;
    font-family: Epilogue;
    font-size: 0.938rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.625rem;
`;

export const ReviewIcon = styled(IoDocumentTextOutline)`
    justify-content: center;
    item-align:center;
    height:2.84vh;
    width:1.3vw;
    margin-top:0.3vw;
    margin-left:1vw;
`;

/* Rectangle 95 */
export const DetailImage = styled.div`
    display: flex;
    width: 52.4vw;  
    height: 50.7vh;
    background-image: url(${require("../../img/Rectangle95.png")});
    background-size: cover;
    margin-left:-42vw;
    margin-top:-20vw;
`;

export const ImageBox = styled.div`
    display:flex
`;

export const DetailImages = styled.div`
    display: flex;
    width: 19.5vw;  
    height: 26.04vw;
    background-image: url(${() => images[Math.floor(Math.random() * images.length)]});
    background-size: cover;
    margin-left:1.5vw;
    margin-top:8vw;
`;
