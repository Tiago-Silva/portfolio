'use client';

import React from 'react';

import {
  Container, Title
} from './styles';
import Slider from "@/app/components/Slider/slider";


export const ProjectSection: React.FC = () => {
  return (
    <Container id="projects">
      <Title>Projetos</Title>

      <Slider />

    </Container>
  );
}
