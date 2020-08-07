import React from "react";
import styled from "styled-components";
import ja from "../../assets/images/ja.jpg";

const about = [
  { id: 1, text: "1. I'm 28", emoji: null },
  { id: 2, text: "2. Was born in New York", emoji: "\u{1F5FD}" },
  {
    id: 3,
    text: "3. Played some footbal (european), broke a leg, not playing anymore",
    emoji: "\u{26BD}",
  },
  {
    id: 4,
    text: "4. Played some basketball, broke arm, not playing anymore",
    emoji: "\u{1F3C0}",
  },
  { id: 5, text: "5. Throwing fresbee though", emoji: null },
  {
    id: 6,
    text: "6. Going for kitesufring, hoping I don't break anything",
    emoji: "\u{1F3C4}",
  },
  { id: 7, text: "7. Main transportation - bike", emoji: "\u{1F6B4}" },
  {
    id: 8,
    text: "8. Coolest place I've been? Australian Rainforest",
    emoji: "\u{1F334}",
  },
  {
    id: 9,
    text: "9. I got to be lifting weights at least twice a week",
    emoji: "\u{1F3CB}",
  },
  {
    id: 10,
    text: "10. Reeealy into coding, getting better by the day",
    emoji: "\u{1F468}",
  },
  {
    id: 11,
    text: "11. Like making photos, not being on them",
    emoji: "\u{1F4F8}",
  },
  { id: 12, text: "12. Live in Warsaw, but citizen of the world", emoji: null },
  {
    id: 13,
    text:
      "13. Organized a trip for my 16 friends to go to Thailand. Weirdest trip ever",
    emoji: "\u{1F30F}",
  },
  {
    id: 14,
    text: "14. Favorite smell? Fresh pizza straight from the oven",
    emoji: "\u{1F355}",
  },
  { id: 15, text: "15. 'Breaking Bad' all the way!", emoji: "\u{1F4FA}" },
  {
    id: 16,
    text: "16. I got my GF, we like each other pretty darn much",
    emoji: "\u{1F469}",
  },
  { id: 17, text: "17. Lost my hair, gained a beard", emoji: "\u{1F468}" },
  { id: 18, text: "18. Whooping major ass in board games", emoji: "\u{1F3B2}" },
  { id: 19, text: "19. Just kidding, doing this for fun", emoji: null },
  {
    id: 20,
    text: "20. Favorite quote: 'I find your lack of faith... disturbing'",
    emoji: null,
  },
  {
    id: 21,
    text:
      "21. I got my youger brother (14 years), he's pretty chill, wants be a goalkeeper",
    emoji: "\u{1F945}",
  },
  {
    id: 22,
    text: "22. Tequila doesn't like me as much as I like Tequila",
    emoji: null,
  },
  {
    id: 23,
    text: "23. Can't eat at home if I'm not watching a movie",
    emoji: "\u{1F60B}",
  },
  {
    id: 24,
    text: "24. My dream? Being able to work and travel",
    emoji: "\u{2708}",
  },
  { id: 25, text: "25. I hope to meet you", emoji: "\u{1F44B}" },
  { id: 26, text: "26. And have a fantastic day!", emoji: "\u{1F609}" },
];

const StyledContainer = styled.div``;
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
  font-size: 0.75rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
`;
const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 50px 0;
  @media (max-width: 500px) {
    margin: 100px 0;
  }
`;
const StyledLi = styled.li`
  font-size: 1rem;
  margin: 4px 0;
  @media (max-width: 1280px) {
    font-size: 0.8rem;
  }
  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
const StyledImageContainer = styled.div`
  padding-top: 50px;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    padding: 0;
  }
  @media (max-width: 500px) {
    margin: 0;
  }
`;
const StyledImage = styled.img`
  max-width: 100%;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.5s;
`;

function About() {
  return (
    <StyledContainer id="about" className="section">
      <StyledHr></StyledHr>
      <StyledParagraph>
        List of Relevant Facts About Me That May Or May Not Make You Wish We Had
        a Beer
      </StyledParagraph>
      <StyledGrid>
        <StyledUl>
          {about.map((item) => (
            <StyledLi id="list" key={item.id}>
              {item.text} {item.emoji}{" "}
            </StyledLi>
          ))}
        </StyledUl>
        <StyledImageContainer>
          <StyledImage id="photo" src={ja}></StyledImage>
        </StyledImageContainer>
      </StyledGrid>
    </StyledContainer>
  );
}

export default About;
