import React, { useState, useRef } from "react";
//import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Menu from "../Menu/Menu";
import Burger from "../Burger/Burger";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  z-index: 999;
  padding: 0 400px;
  @media (max-width: 1440px) {
    padding: 0 200px;
  }
  @media (max-width: 1024px) {
    padding: 0 150px;
  }
  @media (max-width: 768px) {
    padding: 0 100px;
  }
  @media (max-width: 575px) {
    padding: 0 100px;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

const StyledLi = styled.li`
  margin-left: 100px;
  font-weight: 700;
  font-size: 1rem;
  @media (max-width: 1080px) {
    margin-left: 50px;
  }
`;
const StyledDiv = styled.div`
  margin: 0;
  padding: 0;
`;

const StyledLink = styled(AnchorLink)`
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  color: #34495e;
  z-index: 999;
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  return (
    <StyledContainer>
      <StyledLink to="/">JAKUBŚMIAROWSKI.</StyledLink>
      <StyledUl>
        <StyledLi>
          <StyledLink href="#projects">Projects</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink href="#about">About</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink href="#contact">Contact</StyledLink>
        </StyledLi>
      </StyledUl>
      {/*<StyledDiv ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </StyledDiv>*/}
    </StyledContainer>
  );
};

export default Header;
