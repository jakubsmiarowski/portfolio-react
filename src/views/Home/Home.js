import React, {useRef, useEffect} from 'react'
import styled from 'styled-components';
import cvKuba from '../../assets/CV/Jakub Śmiarowski - CV.pdf'
import {revealTextHome,reavealButton,reavealEmoji} from '../../components/Animations/Animations';

const StyledContainer = styled.div`
    margin: 0 auto;
    padding: 0 300px;
    @media(max-width: 1080px){
        padding: 0 150px;
    }
    @media(max-width: 800px){
        padding: 0 100px;
    }
    @media(max-width: 575px){
        padding: 0 30px;
    }
`;
const StyledWrapper = styled.div`
`;

const StyledHeader = styled.h5` 
    font-size: 24px;
    font-weight: 400;
    padding-right: 250px;
    margin: 10px 0;
    line-height: 40px;
    &:first-of-type{
        margin-top: 260px;
    }
    @media(max-width: 800px){
        font-size: 20px;
        padding: 0;
    }
`;

const StyledButton = styled.button`
    padding: 15px 40px;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    background-color: #0984e3;
    color: white;
    float: right;
    cursor: pointer;
    outline: none;
    @media(max-width: 800px){
        float: left;
        margin-top: 20px;
    }
`;
const StyledHeaderEmoji = styled.div`
    margin-right: 5px;
    font-size: 20px;
`;

function Home() {

    let line1 = useRef(null);

    let button = useRef(null);
    let emoji = useRef(null);


    useEffect(() => {
      revealTextHome(line1);
      reavealButton(button);
      reavealEmoji(emoji)
    });

    return (
      <StyledContainer>
        <StyledWrapper>
          <StyledHeader ref={el => (line1 = el)}>
            Hello! Cześć! ¡Holá!<br></br>
            I'm <b>Kuba</b> — a Warsaw based soon to be frontend engineer and sports enthusiast, currently working at Stanley Black & Decker.
          </StyledHeader>
            <StyledHeaderEmoji role="img" ref={el => (emoji = el)}>
              &#127745;
              &#127754;
              &#128187;
              &#128247;
              &#127947;
              &#128692;
              &#128509;
              &#128526;
            </StyledHeaderEmoji>
            <a 
              href={cvKuba} 
              target="_blank"
              rel="noopener noreferrer"
            ><StyledButton ref={el => (button = el)}>Resume.pdf</StyledButton>
            </a>
        </StyledWrapper>
      </StyledContainer>
    );
  }

export default Home;