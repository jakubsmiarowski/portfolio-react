import React from "react";
import styled from "styled-components";
import shop from "../../assets/images/shop.jpg";
import sudoku from "../../assets/images/sudoku.jpg";
import zapp from "../../assets/images/music-zapp.jpg";
import mentor from "../../assets/images/mentor.png";
import favnote from "../../assets/images/favnote.jpg";
import hangman from "../../assets/images/hangman.png";

const projects = [
  {
    name: "React Bike Shop",
    image: shop,
    live: "https://bike-shop-95af0.firebaseapp.com/",
    code: "https://github.com/jakubsmiarowski/shop",
  },
  {
    name: "React Sudoku Game",
    image: sudoku,
    live: "https://sudoku-j.herokuapp.com/",
    code: "https://github.com/jakubsmiarowski/sudoku",
  },
  {
    name: "Music-Zapp",
    image: zapp,
    live: "https://jolly-leakey-52d67d.netlify.app/",
    code: "https://github.com/jakubsmiarowski/music-zapp",
  },
  {
    name: "Doctor Mentor",
    image: mentor,
    live: "https://loving-swanson-4674f2.netlify.app/",
    code: "https://github.com/jakubsmiarowski/drmentor-react",
  },
  {
    name: "Favnote",
    image: favnote,
    live: "https://jovial-lichterman-ebd600.netlify.com/",
    code: "https://github.com/jakubsmiarowski/favnote",
  },
  {
    name: "Hangman",
    image: hangman,
    live: "https://adoring-carson-624a00.netlify.app/",
    code: "https://github.com/jakubsmiarowski/hangman-react",
  },
];

const StyledContainer = styled.div`
  margin-top: 150px;
`;
const StyledHr = styled.hr`
  display: block;
  width: 100px;
  height: 2px;
  margin: 0 auto;
  background: black;
  border: none;
  border-radius: 3%;
`;
const StyledParagraph = styled.p`
  margin-top: 30px;
  color: #34495e;
  font-size: 0.75rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
`;
const StyledProjectsContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 3rem;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const StyledProject = styled.div`
  position: relative;
  height: 100%;

  .overlay {
    transition: 0.5s;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.92);
    .project-btn {
      transform: none;
    }
    .img {
      opacity: 0.2;
      transform: scale(1.03);
    }
    .overlay {
      opacity: 1;
    }
  }
  @media (max-width: 800px) {
    margin: 0 auto;
  }
`;
const StyledOverlay = styled.div`
  position: absolute;
  transform: translate(-50%);
  top: 45%;
  left: 50%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
  z-index: 1;
`;
const StyledSpan = styled.span`
  font-size: 28px;
  transition: 0.5s;
  border: none;
  border-radius: 10px;
  background: #34495e;
  padding: 4px 15px;
  &:first-child {
    transform: translateX(-500px);
  }
  &:nth-child(2) {
    transform: translateX(500px);
  }
`;
const StyledLink = styled.a`
  padding: 6px;
  text-decoration: none;
  color: #ecf0f1;
  cursor: pointer;
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: contain;
  -webkit-box-shadow: 0px 0px 12px -1px rgba(52, 73, 94, 0.45);
  -moz-box-shadow: 0px 0px 12px -1px rgba(52, 73, 94, 0.45);
  box-shadow: 0px 0px 12px -1px rgba(52, 73, 94, 0.45);
  transition: 0.5s;
`;

function ProjectsList() {
  return (
    <StyledContainer id="projects" className="section">
      <StyledHr></StyledHr>
      <StyledParagraph>
        These are some of the projects I worked on
      </StyledParagraph>
      <StyledProjectsContainer>
        {projects.map((item) => (
          <StyledProject id="project" key={item.name}>
            <StyledOverlay className="overlay">
              <StyledSpan className="project-btn">
                <StyledLink
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  live
                </StyledLink>
              </StyledSpan>
              <StyledSpan className="project-btn">
                <StyledLink
                  href={item.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  code
                </StyledLink>
              </StyledSpan>
            </StyledOverlay>
            <StyledImage
              className="img"
              src={item.image}
              alt={item.name}
            ></StyledImage>
          </StyledProject>
        ))}
      </StyledProjectsContainer>
    </StyledContainer>
  );
}

export default ProjectsList;
