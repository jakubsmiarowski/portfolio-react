import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { reavealProjects } from "../../components/Animations/Animations";
import Form from "../../components/Form/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/fontawesome-free-solid";

const StyledContainer = styled.div`
  margin: 150px 0 50px 0;
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
  @media (max-width: 575px) {
    margin-bottom: 50px;
  }
`;
const StyledContactInfo = styled.div`
  color: black;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;
  margin: 20px 0;
`;
const StyledContactSpan = styled.span`
  cursor: pointer;
  color: black;
  font-weight: 400;
  margin: 0 32px;
  &:first-child {
    margin-left: 64px;
  }
  svg {
    margin-top: 20px;
    color: #34495e;
    font-size: 30px;
    transition: 0.3s ease-in-out;
    &:hover {
      color: white;
      background: #34495e;
      padding: 8px 24px;
      border-radius: 4px;
    }
  }
  @media (max-width: 425px) {
    margin: 0 16px;
  }
`;
const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
const socials = [
  {
    item: "LinkedIn",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/jakub-%C5%9Bmiarowski-779371104/",
  },
  {
    item: "Github",
    icon: faGithub,
    link: "https://github.com/jakubsmiarowski/",
  },
  {
    item: "Facebook",
    icon: faFacebook,
    link: "https://www.facebook.com/jakub.smiarowski",
  },
  { item: "Mail", icon: faEnvelope, link: "mailto:jakub.smiarowski@gmail.com" },
];

const Contact = () => {
  //Dom node for animation
  let form = useRef(null);

  useEffect(() => {
    reavealProjects(form);
  });

  return (
    <StyledContainer id="contact">
      <StyledHr></StyledHr>
      <StyledParagraph>Want to get in touch? Shoot me an email</StyledParagraph>
      <div ref={(el) => (form = el)}>
        <Form />
        <StyledContactInfo>
          <StyledParagraph>Or let me know here:</StyledParagraph>
          {socials.map((item) => (
            <StyledContactSpan>
              <StyledLink
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={item.icon} />
              </StyledLink>
            </StyledContactSpan>
          ))}
        </StyledContactInfo>
      </div>
    </StyledContainer>
  );
};

export default Contact;
