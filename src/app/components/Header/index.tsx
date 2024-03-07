'use client';
import React from 'react';

import {
  AboutIcon,
  Container, 
  HomeIcon, 
  LinkMenu, 
  Nav,
  ProjectIcon,
  SkillsIcon
} from './styles';

export const Header = () => {
  return (
    <Container>
      <Nav>
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
