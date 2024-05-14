'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';

import {
  Container,
  Content,
  CssIcon,
  DockerIcon,
  ExpoIcon,
  GitIcon,
  HtmlIcon,
  JavaIcon,
  JavasciptIcon,
  MysqlIcon,
  NextIcon,
  ReactIcon,
  SpringIcon,
  SpringSecurityIcon,
  StyledIcon,
  TauriIcon,
  Title,
  TypeScriptIcon,
} from './styles';
import SkillSlider from "@/app/components/SklllSlider/skillSlider";

const skills = [
  { icon: HtmlIcon, text: 'HTML' },
  { icon: CssIcon, text: 'CSS' },
  { icon: JavasciptIcon, text: 'JavaScript' },
  { icon: ReactIcon, text: 'React.JS' },
  { icon: ReactIcon, text: 'React Native' },
  { icon: StyledIcon, text: 'S. components' },
  { icon: TypeScriptIcon, text: 'Typescript' },
  { icon: NextIcon, text: 'NEXTJS' },
];

const skillsTwo = [
  { icon: ExpoIcon, text: 'EXPO' },
  { icon: TauriIcon, text: 'Tauri' },
  { icon: MysqlIcon, text: 'MYQL' },
  { icon: SpringIcon, text: 'Spring Boot' },
  { icon: SpringSecurityIcon, text: 'Spring security' },
  { icon: JavaIcon, text: 'Java' },
  { icon: GitIcon, text: 'GitHub' },
  { icon: DockerIcon, text: 'Docker' },
];

export const SkillSection = () => {
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
    <Container id="skills" style={{ opacity: isVisible ? 1 : 0 }} ref={nodeRef}>
      <Title>Minhas Skills</Title>

      <Content $isVisible={isVisible}>
        <SkillSlider
          skills={skills}
        />

        <SkillSlider
          skills={skillsTwo}
        />

      </Content>
    </Container>

  );
}
