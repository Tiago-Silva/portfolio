'use client';

import React from 'react';

import {
  Container, Content, Title
} from './styles';
import { ProjectCard } from '../ProjectCard';

const projects = [
  {
    src: '/landingpage.gif',
    alt: 'Next-tailwind',
    title: 'Landing Page tailwind',
    git: 'https://github.com/Tiago-Silva/landingpage-tailwind',
    technologies: [
      ' React,', 
      ' NextJS,', 
      ' Tailwindcss,', 
      ' TypeScript,', 
      ' Styled Components'
    ],
  },
  {
    src: '/hamburgueria.png',
    alt: 'Hamburgueria',
    title: 'Aplicativo para hamburgueria local',
    git: '#',
    technologies: [
      ' React Native,', 
      ' Expo,', 
      ' TypeScript,', 
      ' Styled Components'
    ],
  },
  {
    src: '/tauri.png',
    alt: 'Tauri',
    title: 'Frente de caixa desktop',
    git: 'https://github.com/Tiago-Silva/PDV-Hamburgueria',
    technologies: [
      ' React,', 
      ' NextJS,', 
      ' Tauri,', 
      ' TypeScript,', 
      ' Styled Components'
    ],
  },
  {
    src: '/food.png',
    alt: 'Food',
    title: 'Aplicativo web-admin para hamburgueria local',
    git: '#',
    technologies: [
      ' React,', 
      ' NextJS,', 
      ' TypeScript,', 
      ' Styled Components'
    ],
  },
  {
    src: '/calculadora.gif',
    alt: 'Calculadora-Tauri',
    title: 'Calculadora desktop',
    git: 'https://github.com/Tiago-Silva/calculator-tauri-react',
    technologies: [
      ' React,', 
      ' NextJS,', 
      ' Tauri,', 
      ' TypeScript,', 
      ' Styled Components'
    ],
  },
  {
    src: '/fileStorage.png',
    alt: 'Upload-files/images',
    title: 'Upload files/images',
    git: 'https://github.com/Tiago-Silva/file-storage-api',
    technologies: [
      ' Java,', 
      ' Spring Boot'
    ],
  },
  {
    src: '/restClient.png',
    alt: 'Rest-Client',
    title: 'Rest client',
    git: 'https://github.com/Tiago-Silva/auth-server',
    technologies: [
      ' Java,', 
      ' Spring Boot'],
  },
  {
    src: '/authServer.png',
    alt: 'Auth-Server',
    title: 'Authorization Server',
    git: 'https://github.com/Tiago-Silva/auth-server',
    technologies: [
      ' Java,', 
      ' Spring Boot,',
      ' Spring security,', 
      ' Spring OAuth2 Authorization Server'
    ],
  },
  {
    src: '/authApi-Clean.png',
    alt: 'Auth api',
    title: 'Auth API with clean architecture',
    git: 'https://github.com/Tiago-Silva/auth-api',
    technologies: [
      ' Java,', 
      ' Spring Boot,',
      ' Spring security,', 
      ' Mysql'
    ],
  },
  {
    src: '/todoList.gif',
    alt: 'TodoList',
    title: 'Todo List - tauri',
    git: 'https://github.com/Tiago-Silva/tauri-todo-list',
    technologies: [
      ' React,', 
      ' NEXT.JS,',
      ' Styled components,', 
      ' Tauri'
    ],
  },
  {
    src: '/dtmoney.png',
    alt: 'DT Money',
    title: 'DT Money',
    git: 'https://github.com/Tiago-Silva/dtmoney',
    technologies: [
      ' React,', 
      ' TypeScript,', 
      ' Styled Components'
    ],
  },
  {
    src: '/petFood.gif',
    alt: 'PetFood',
    title: 'Aplicação desktop ou web - PetFood',
    git: '#',
    technologies: [
      ' React,', 
      ' NEXT.JS,',
      ' Styled components,', 
      ' Tauri'
    ],
  },
  {
    src: '/cardapio.png',
    alt: 'Cardápio Mobille',
    title: 'Cardápio Mobille',
    git: 'https://github.com/Tiago-Silva/mobille-cardapio',
    technologies: [
      ' React Native,', 
      ' TypeScript,'
    ],
  },
  {
    src: '/sortTeams.png',
    alt: 'SortTeams',
    title: 'Aplicativo para sorteio de times',
    git: 'https://github.com/Tiago-Silva/SortTeams',
    technologies: [
      ' React Native,', 
      ' TypeScript,', 
      ' Styled Components'
    ],
  },
];

export const ProjectSection: React.FC = () => {
  return (
    <Container id="projects">
      <Title>Projetos</Title>

      <Content>
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            src={project.src}
            alt={project.alt}
            title={project.title}
            git={project.git}
            tecnologies={project.technologies}
          />
        ))}
      </Content>

    </Container>
  );
}
