import React from 'react';

import {
  Container, 
  Footer, 
  FooterText, 
  FooterTitle,
  GitIcon,
  GitLink,
  WrapperGitInfo,
  WrapperImage
} from './styles';
import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  title: string;
  git: string;
  tecnologies: string[];
}

export const ProjectCard = ({
  src,
  alt,
  title,
  git,
  tecnologies
}: Props) => {
  return (
    <Container>

      <WrapperImage>
        <Image
          src={src}
          alt={alt}
          width={300}
          height={300}
          quality='95'
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          priority={true}
          unoptimized={true}
        />
      </WrapperImage>

      <Footer>
        <FooterTitle>{title}</FooterTitle>
        <FooterText>
          Tecnologias: 
          {tecnologies.map((tecnology, index) => (
            tecnology
          ))}
        </FooterText>
        <WrapperGitInfo>
          <GitIcon />
          <GitLink href={git} target='_blank'>
            GITHUB
          </GitLink>
        </WrapperGitInfo>
      </Footer>
    </Container>
  );
}
