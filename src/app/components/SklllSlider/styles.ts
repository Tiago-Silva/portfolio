import styled from "styled-components";
import { Swiper } from 'swiper/react';


const media = (width: number, content: string) => `
  @media (max-width: ${width}px) {
    ${content}
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;

  margin-bottom: 10px;
`;

export const Content = styled(Swiper)`
    height: 100%;
`;

export const WrapperIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #212121;
  padding: 20px;

  width: 80%;
  height: 6%;

  box-shadow: 0 0 10px 2px ${({ theme }) => theme.colors.primary};
  border-radius: 4px;

  margin-top: 10px;

  ${media(998, 'width: 70%; min-height: 150px;')}
  ${media(625, 'width: 70%; height: auto;')}
  ${media(450, 'width: 68%; height: auto;')}
  ${media(370, 'width: 60%; min-height: 100px;')}
  ${media(340, 'width: 90%; min-height: 100px;')}
`;

export const Text = styled.h1`
  font-size: 1.2vw;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;
