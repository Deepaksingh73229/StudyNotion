import React from 'react';
import styled from 'styled-components';

export function Loader() {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    height: 50px;
    width: 50px;
    background: transparent;
    border: red 3px solid;
    border-top: transparent;
    border-radius: 50%;
    animation: animate81323 0.8s linear infinite;
  }

  @keyframes animate81323 {
    0% {
      border: 3px solid rgb(255, 75, 75);
      border-top: transparent;
      border-left: transparent;
      transform: rotate(0deg);
    }

    50% {
      border: 3px dashed rgb(240, 41, 240);
      border-top: transparent;
      border-left: transparent;
      transform: rotate(270deg);
    }

    100% {
      border: 3px dotted rgb(28, 228, 28);
      border-top: transparent;
      border-left: transparent;
      transform: rotate(360deg);
    }
  }`;
