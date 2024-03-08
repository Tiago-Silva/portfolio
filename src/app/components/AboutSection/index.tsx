'use client';
import React, { useState } from 'react';

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
import VisibilitySensor from 'react-visibility-sensor';

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (visiblity: boolean) => {
    setIsVisible(visiblity);
  };


  return (
    <VisibilitySensor onChange={onChange}>
      <Container id="about" style={{ opacity: isVisible ? 1 : 0 }}>
        <WrapperTitle>
          <Title>Sobre mim</Title>
        </WrapperTitle>
        <Content>
          <WrapperImage $isVisible={isVisible}>
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

          <WrapperText $isVisible={isVisible}>
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
    </VisibilitySensor>
  );
}
