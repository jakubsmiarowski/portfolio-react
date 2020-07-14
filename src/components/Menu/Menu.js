import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import styled from 'styled-components';

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  staggerRevealClose
} from "../Animations/Animations";


const StyledMenu = styled.div`
    display: none;
    z-index: 8;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    overflow: hidden;
`;
const StyledMenuSecondary = styled.div`
    background: #191919;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -1;
    overflow: hidden;
`;
const StyledMenuLayer = styled.div`
    position: relative;
    background: #0984e3;
    height: 100%;
    overflow: hidden;
`;

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

const StyledMenuLinks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    position: relative;
    top: 200px;
    margin: 0;
    padding: 0;
`;
const StyledUl = styled.ul`
    margin: 0 0 100px;
    padding: 0;
`;
const StyledLi = styled.li`
    list-style: none;
    font-size: 6rem;
    font-weight: 700;
    cursor: pointer;
    height: 135px;
    overflow: hidden;
    @media(max-width: 575px){
      font-size: 5rem;
    }
`;
const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  &:hover{
    color: #191919;
  }
`;
const StyledInfo = styled.div`
    color: #fff;
    width: 400px;
    float: left;
`;
const StyledHeader = styled.h3`
    font-size: 1.2rem;
    margin: 8px auto;
    text-align: left;
`;


const Menu = ({ state }) => {

  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {

    if (state.clicked === false) {

      
      staggerRevealClose(reveal2, reveal1);

      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {

      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });

      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  return (
    <StyledMenu ref={el => (menuLayer = el)}>
      <StyledMenuSecondary ref={el => (reveal1 = el)}></StyledMenuSecondary>
      <StyledMenuLayer ref={el => (reveal2 = el)}>
        <StyledContainer>
            <StyledMenuLinks>
                <StyledUl>
                    <StyledLi>
                        <StyledLink
                        ref={el => (line1 = el)}
                        to='/projects'>
                        Projects
                        </StyledLink>
                    </StyledLi>
                    {/* <StyledLi>
                        <StyledLink
                        ref={el => (line2 = el)}
                        to='/skills'>
                        Skills
                        </StyledLink>
                    </StyledLi> */}
                    <StyledLi>
                        <StyledLink
                        ref={el => (line2 = el)}
                        to='/about'>
                        About
                        </StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink
                        ref={el => (line3 = el)}
                        to='/contact'>
                        Contact
                        </StyledLink>
                    </StyledLi>
                </StyledUl>
              <StyledInfo ref={el => (info = el)}>
                <StyledHeader>I find your lack of faith disturbing</StyledHeader>
              </StyledInfo>
            </StyledMenuLinks>
        </StyledContainer>
      </StyledMenuLayer>
    </StyledMenu>
  );
};

export default Menu;