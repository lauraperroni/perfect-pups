import styled, { keyframes } from "styled-components";

const colorRotate = keyframes`
  0%, 100% {
    color: rgb(255,0,0);
  }
  8% {
    color: rgb(255,127,0);
  }
  16% {
    color: rgb(255,255,0);
  }
  33% {
    color: rgb(0,255,0);
  }
  50% {
    color: rgb(0,255,255);
  }
  83% {
    color: rgb(255,0,255);
  }
  91% {
    color: rgb(255,0,127);
  }
`;

export interface TitleStyleProps {
  fontSize?: string;
  align?: "left" | "center" | "right";
  strokeColor?: string;
  strokeWidth?: string;
}

export const SupaDupaCoolTitle = styled.h1<TitleStyleProps>`
  text-align: ${({ align }) => align || "center"};
  font-size: ${({ fontSize }) => fontSize || "50px"};
  font-family: "Comic Sans MS", "Papyrus", cursive;
  letter-spacing: 10px;
  animation: ${colorRotate} 2s linear infinite;
  -webkit-text-stroke: ${({ strokeWidth, strokeColor }) =>
    `${strokeWidth || "0px"} ${strokeColor || "transparent"}`};

  /* Responsividade: diminui a fonte em telas pequenas */
  @media (max-width: 768px) {
    font-size: ${({ fontSize }) =>
      fontSize ? `calc(${fontSize} * 0.6)` : "30px"};
    letter-spacing: 5px;
  }

  @media (max-width: 480px) {
    font-size: ${({ fontSize }) =>
      fontSize ? `calc(${fontSize} * 0.4)` : "22px"};
    letter-spacing: 3px;
  }
`;
