'use client';
import React from 'react';

import {
  Container, 
  Content, 
  Text, 
  Title,
  Wrapper
} from './styles';
import { GitIcon, Link, LinkedInIcon, StyledButton, WrapperButton } from '../IntroSection/styles';

export const Footer = () => {
  return (
    <Container>
      <Content>
        <Title>'Não é a linguagem de programação que define o programador, mas sim sua lógica'</Title>
        <Wrapper>
          <WrapperButton>
            <StyledButton>
              <GitIcon />
              <Link 
                href='https://github.com/Tiago-Silva?tab=repositories' 
                target='_blank'
              >
                GitHub
              </Link>
            </StyledButton>
            <StyledButton>
              <LinkedInIcon />
              <Link
                href='https://www.linkedin.com/in/tiago-silva-67b4102b3/' 
                target='_blank'
              >
                LinkedIn
              </Link>
            </StyledButton>
          </WrapperButton>
        </Wrapper>
        <Text>© Copyright 2024. Todos os direitos reservados.</Text>
        <Text>Desenvolvido por Tiago Silva</Text>
      </Content>
    </Container>
  );
}
