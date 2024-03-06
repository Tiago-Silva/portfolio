'use client';
import React from 'react';

import {
  Container, 
  Content,
  StyledImage,
  Text,
  Title,
  WrapperImage,
  WrapperText,
  WrapperTitle,
} from './styles';
import Image from 'next/image';

export const AboutSection = () => {
  return (
    <Container>
      <WrapperTitle>
        <Title>Sobre mim</Title>
      </WrapperTitle>
      <Content>
        <WrapperImage>
          <StyledImage>
            <Image
              src='/avatar.png'
              alt='Tiago Silva'
              width={400}
              height={400}
              quality='95'
              layout='responsive'
              priority={true}
            />
          </StyledImage>
        </WrapperImage>

        <WrapperText>
          <Text>
            Sou apaixo por tecnologia e inovação, e estou sempre em busca de novos desafios.
          </Text>
          <Text>
            Aualmente cursando engenharia de software estou sempre em busca de novos conhecimentos e experiências.
          </Text>
          <Text>
            No meu emprego atual, utilizamos um sistema bastante robusto para a área e cabe a mim as seguintes funções: 
            atender, ensinar e tirar todas as dúvidas e problemas que possam surgir relacionado ao sistema de todos os usuários e representantes.
            Na minha carreira sempre trabalhei com equipes multidisciplinares, com planejamento estratégico, bastante criatividade e responsabilidades de autogestão e organização, e essa experiência com certeza me ajudará bastante na minha nova jornada como Dev.
          </Text>
          <Text>
          Meu objetivo é contribuir para as empresas, entregando código de alta qualidade e soluções eficazes como desenvolvedor Full Stack, tanto no desenvolvimento de sistemas Backend quanto no Frontend.
          </Text>
        </WrapperText>
      </Content>
    </Container>
  );
}
