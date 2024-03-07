'use client';
import React from 'react';

import {
  AboutIcon,
  Container, 
  HomeIcon, 
  LinkItem, 
  ListItem, 
  ListUl, 
  Nav,
  ProjectIcon,
  SkillsIcon
} from './styles';

export const Header = () => {
  return (
    <Container>
      <Nav>
        <ListUl>
          <ListItem>
            <HomeIcon />
            <LinkItem href="#intro">
              Introdução
            </LinkItem>
          </ListItem>
          <ListItem>
            <AboutIcon />
            <LinkItem href="#about">
              Sobre
            </LinkItem>
          </ListItem>
          <ListItem>
            <ProjectIcon />
            <LinkItem href="#projects">
              Projetos
            </LinkItem>
          </ListItem>
          <ListItem>
            <SkillsIcon />
            <LinkItem href="#skills">
              Habilidades
            </LinkItem>
          </ListItem>
        </ListUl>
      </Nav>
    </Container>
  );
}
