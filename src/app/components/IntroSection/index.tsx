'use client';
import React, { useState, useRef, useLayoutEffect } from 'react';

import {
  AboutInfo,
  Container, 
  GifContainer, 
  GitIcon, 
  Link, 
  LinkedInIcon, 
  StyledButton, 
  SubTitle, 
  SvgBackground, 
  Title, 
  WrapperAbout,
  WrapperButton
} from './styles';
import Image from 'next/image';

export const IntroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const nodeRef = useRef(null);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setIsVisible(entry.isIntersecting);
      });
    });

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => {
      if (nodeRef.current) {
        observer.unobserve(nodeRef.current);
      }
    };
  }, []);

  return (
    <Container id="intro" style={{ opacity: isVisible ? 1 : 0 }} ref={nodeRef}>
      <SvgBackground
        viewBox='0 0 1024 1024'
        aria-hidden='true'
      >
        <circle
          cx='512'
          cy='512'
          r='512'
          fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
          fillOpacity='0.7'
        />
        <defs>
          <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
            <stop stopColor='#7775D6' />
            <stop offset='1' stopColor='#E935C1' />
          </radialGradient>
        </defs>
      </SvgBackground>

      <WrapperAbout>
        <AboutInfo $isVisible={isVisible}>
          <Title>Olá eu sou o</Title>
          <Title>Tiago Silva</Title>

          <SubTitle>Desenvolvedor de software Full-Stack</SubTitle>

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
        </AboutInfo>

        <GifContainer $isVisible={isVisible}>
          <Image
            src='/programming.gif'
            alt='Tiago Silva'
            width={600}
            height={600}
            quality='95'
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            priority={true}
            unoptimized={true}
          />
        </GifContainer>
      </WrapperAbout>

    </Container>
  );
};