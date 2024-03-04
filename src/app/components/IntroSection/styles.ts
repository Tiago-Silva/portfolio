import styled from "styled-components";
import { FaGithub, FaLinkedin } from 'react-icons/fa';


export const Container = styled.section`
  position: relative;
`;

export const SvgBackground = styled.svg`
  position: absolute;
  left: 33.333333%;
  top: 100%;
  z-index: -10;
  height: 16rem;
  width: 16rem;
  transform: translateY(-50%);
  mask-image: radial-gradient(closest-side, white, transparent);

  @media (min-width: 768px) {
    left: 50%;
    top: 50%;
    height: 54rem;
    width: 54rem;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 1024px) {
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export const WrapperAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    text-align: start;
    margin-bottom: 0;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #7c3aed;
  margin: 0;
`;

export const SubTitle = styled.h1`
  font-size: 2rem;
  color: #828282;
`;

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  border-color: #7c3aed;
  border-style: solid; 
  border-width: 2px;
  font-size: 2rem;
  padding: 10px;
  cursor: pointer;
  gap: 10px;
`;

export const Link = styled.a`
  font-size: 2rem;
  color: #7c3aed;
  text-decoration: none;
`;

export const GitIcon = styled(FaGithub)`
  color: #7c3aed;
`;

export const LinkedInIcon = styled(FaLinkedin)`
  color: #7c3aed;
`;

export const GifContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 0;

  @media (min-width: 768px) {
    padding-left: 5rem;
  }

  @media (min-width: 1024px) {
    max-width: none;
    padding: 1rem;
  }
`;