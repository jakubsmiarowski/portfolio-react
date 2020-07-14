import React from 'react'
import styled from 'styled-components';

const StyledParagraph = styled.p`
    font-size: 0.75rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
`;


const Skills = () => {
    return (
      <StyledParagraph>And here are some of the skills I acquired along the way</StyledParagraph>
    );
  }

export default Skills;