import styled from "styled-components";
import { FaHome, FaUser, FaProjectDiagram } from 'react-icons/fa';
import { GiSkills } from "react-icons/gi";
import { Link as ScrollLink } from 'react-scroll';


export const Container = styled.header`
  flex: 1;
  width: 100%;
  position: absolute;
  top: 0;

  left: -10px;

  height: 5%;

  z-index: 2;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 10rem;
`;

export const LinkMenu = styled(ScrollLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 15px;

  gap: 5px;

  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};

  cursor: pointer;

  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    filter: blur(1px);
  }
`;

export const HomeIcon = styled(FaHome)`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const AboutIcon = styled(FaUser)`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ProjectIcon = styled(FaProjectDiagram)`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const SkillsIcon = styled(GiSkills)`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;