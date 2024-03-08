'use client';
import React, { useLayoutEffect, useRef, useState } from 'react';

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
  const [aboutIsVisible, setAboutIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setAboutIsVisible(entry.isIntersecting);
        });
      },
      {
        rootMargin: '-200px 0px', // Ajuste esses valores conforme necessário
      }
    );
  
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
  
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);


  return (
    <Container id="about" style={{ opacity: aboutIsVisible ? 1 : 0 }} ref={aboutRef}>
      <WrapperTitle>
        <Title>Sobre mim</Title>
      </WrapperTitle>
      <Content>
        <WrapperImage $isVisible={aboutIsVisible}>
          <StyledImage>
            <Image
              src='/avatar.png'
              alt='Tiago Silva'
              width={400}
              height={400}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              quality='95'
              priority={true}
            />
          </StyledImage>
        </WrapperImage>

        <WrapperText $isVisible={aboutIsVisible}>
          <Text>
            Sou apaixonado por tecnologia e inovação, e estou sempre em busca de novos desafios.
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
