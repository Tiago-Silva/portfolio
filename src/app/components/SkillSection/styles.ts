import styled, { css } from "styled-components";
import { 
  SiHtml5,
  SiCss3, 
  SiJavascript, 
  SiMysql, 
  SiSpringboot, 
  SiReact, 
  SiGithub, 
  SiDocker,
  SiTypescript,
  SiStyledcomponents,
  SiSpringsecurity,
  SiTauri,
  SiExpo
} from 'react-icons/si';

import { FaJava } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { slideInLeft } from "../Animation/styles";

interface SkillProps {
  $isVisible: boolean;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Content = styled.div<SkillProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  width: 100%;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${slideInLeft} 2s ease-out;
  `}

  gap: 10px;
`;

export const WrapperIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #212121;
  padding: 20px;

  width: 10%;
  height: 6%;

  box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.colors.primary};
  border-radius: 4px;

  margin-top: 10px;

  @media (max-width: 768px) {
    width: 20%;
    height: 12%;
  }
`;

export const Text = styled.h1`
  font-size: 1.2vw;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

export const HtmlIcon = styled(SiHtml5)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const CssIcon = styled(SiCss3)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const JavasciptIcon = styled(SiJavascript)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const StyledIcon = styled(SiStyledcomponents)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const NextIcon = styled(TbBrandNextjs)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const ExpoIcon = styled(SiExpo)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const MysqlIcon = styled(SiMysql)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const SpringIcon = styled(SiSpringboot)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const SpringSecurityIcon = styled(SiSpringsecurity)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const JavaIcon = styled(FaJava)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;


export const ReactIcon = styled(SiReact)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const TypeScriptIcon = styled(SiTypescript)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const TauriIcon = styled(SiTauri)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const GitIcon = styled(SiGithub)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const DockerIcon = styled(SiDocker)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;