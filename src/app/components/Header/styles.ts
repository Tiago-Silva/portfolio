import styled from "styled-components";
import { FaHome, FaUser, FaProjectDiagram } from 'react-icons/fa';
import { GiSkills } from "react-icons/gi";
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';

interface HeaderProps {
  isNavVisible: boolean;
}

export const Container = styled.header`
  flex: 1;
  width: 100%;
  position: absolute;
  top: 0;

  left: -10px;

  height: 5%;

  z-index: 2;

  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
  }
`;

export const Nav = styled.nav<HeaderProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 10rem;

  @media (max-width: 768px) {
    display: ${({ isNavVisible }) => (isNavVisible ? 'flex' : 'none')};
    flex-direction: column;
    gap: 0.5rem;

    position: relative;
    top: 145px;

    box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.colors.primary};
    border-radius: 4px;

    position: relative;
    
    z-index: 3;
  }
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

  @media (max-width: 768px) {
    margin-top: 10px;
    gap: 3px;

    z-index: 4;
  }
`;

export const WrapperMenuIcon = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary_light};
  cursor: pointer;

  border: none;

  @media (max-width: 768px) {
    display: flex;
    position: absolute;
  }
`;

export const MenuIcon = styled(FiMenu)`
  display: flex;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
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