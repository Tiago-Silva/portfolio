import styled from "styled-components";
import { FaGithub } from 'react-icons/fa';

const media = (width: number, content: string) => `
  @media (max-width: ${width}px) {
    ${content}
  }
`;

export const Container = styled.div`
  background-color: #212121;
  padding: 10px;

  width: 95%;
  height: 100%;


  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;

  ${media(2560, 'width: 93%; min-height: 400px;')}
  ${media(1080, 'width: 93%; min-height: 380px;')}
  ${media(1038, 'width: 93%; min-height: 350px;')}
  ${media(998, 'width: 92%; min-height: 350px;')}
  ${media(800, 'width: 90%; min-height: 350px;')}
  ${media(625, 'width: 95%; min-height: 350px;')}
  ${media(568, 'width: 90%; height: auto;')}
  ${media(350, 'width: 80%; height: auto;')}
`;

export const WrapperImage = styled.div`
  width: 100%;
  max-height: 300px;
  object-fit: cover;

  overflow-y: hidden;
`;

export const Footer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterTitle = styled.h1`
  font-size: 1.2vw;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

export const FooterText = styled.h1`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;

  text-align: center;
`;

export const WrapperGitInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const GitIcon = styled(FaGithub)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const GitLink = styled.a`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
