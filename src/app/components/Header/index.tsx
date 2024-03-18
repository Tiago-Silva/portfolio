'use client';
import React, { useState } from 'react';

import {
  AboutIcon,
  Container, 
  HomeIcon, 
  LinkMenu, 
  Nav,
  ProjectIcon,
  SkillsIcon,
  WrapperMenuIcon
} from './styles';
import { MenuIcon } from 'lucide-react';

export const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleMenuClick = () => {
    console.log('click: ' + isNavVisible);
    setIsNavVisible(!isNavVisible);
  };

  return (
    <Container>
      <WrapperMenuIcon onClick={handleMenuClick}>
        <MenuIcon />
      </WrapperMenuIcon>
      <Nav isNavVisible={isNavVisible}>
        <LinkMenu to="intro" smooth={true} duration={500}>
          <HomeIcon />
          Intro
        </LinkMenu>
        <LinkMenu to="about" smooth={true} duration={500}>
          <AboutIcon />
          About
        </LinkMenu>
        <LinkMenu to="projects" smooth={true} duration={500}>
          <ProjectIcon />
          Project
        </LinkMenu>
        <LinkMenu to="skills" smooth={true} duration={500}>
          <SkillsIcon />
          Skill
        </LinkMenu>
      </Nav>
    </Container>
  );
}
