import React from 'react';
import styled from 'styled-components';

// Styled components
const StyledContainer = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Box = styled.div`
  position: relative;
  width: 320px;
  background: #fff;
  padding: 100px 40px 60px;
  box-shadow: 0 15px 45px rgba(0,0,0,.1);
  border-radius: 7px;
  margin-top: 15px;
  margin-bottom: 25px;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(237, 53, 53);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.2s;
  }
  &:hover:before {
    transform: scaleY(1);
    transform-origin: bottom;
  }
  h2, h3, p {
    transition: 0.2s;
    color: #333;
  }
  &:hover h2, &:hover h3, &:hover p {
    color: #fff;
  }
  h2 {
    position: absolute;
    left: 40px;
    top: 60px;
    font-size: 4em;
    font-weight: 800;
    z-index: 1;
    opacity: 0.1;
  }
  &:hover h2 {
    opacity: 1;
    transform: translateY(-40px);
  }
`;

// React component
const MyComponent = () => {
  return (
    <StyledContainer>
      <Box>
        <h2>Title</h2>
        <h3>Subtitle</h3>
        <p>Description text goes here.</p>
      </Box>
      {/* Repeat <Box> as needed */}
    </StyledContainer>
  );
};

export default MyComponent;