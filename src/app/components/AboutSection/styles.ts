import styled, { css } from "styled-components";
import { slideInLeft, slideInRight } from "../Animation/styles";

interface AboutSectionProps {
  $isVisible: boolean;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
`;

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const WrapperImage = styled.div<AboutSectionProps>`
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 10rem;
  padding: 0 0.625rem;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${slideInLeft} 2s ease-out;
  `}

  @media (min-width: 1024px) {
    max-width: none;
  }
`;

export const StyledImage = styled.div`
  aspect-ratio: 1 / 1;
  transform: rotate(3deg);
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.image_background};
  overflow: hidden;

  max-width: 400px;
  max-height: 400px;

  img {
    /* margin-top: -80px; */
    object-fit: cover;
  }
`;

export const WrapperText = styled.div<AboutSectionProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  word-wrap: break-word;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${slideInRight} 2s ease-out;
  `}
`;

export const Text = styled.h2`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: justify;
`;