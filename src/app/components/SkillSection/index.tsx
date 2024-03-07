'use client';

import React from 'react';

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
  Text, 
  Title,
  TypeScriptIcon,
  WrapperIcon
} from './styles';

export const SkillSection = () => {
  return (
    <Container id="skills">
      <Title>Minhas Skills</Title>

      <Content>

        <WrapperIcon>
          <HtmlIcon />
          <Text>HTML</Text>
        </WrapperIcon>

        <WrapperIcon>
          <CssIcon />
          <Text>CSS</Text>
        </WrapperIcon>

        <WrapperIcon>
          <JavasciptIcon />
          <Text>JavaScript</Text>
        </WrapperIcon>

        <WrapperIcon>
          <ReactIcon />
          <Text>React.JS</Text>
        </WrapperIcon>

        <WrapperIcon>
          <ReactIcon />
          <Text>React Native</Text>
        </WrapperIcon>

        <WrapperIcon>
          <StyledIcon />
          <Text>S. components</Text>
        </WrapperIcon>

        <WrapperIcon>
          <TypeScriptIcon />
          <Text>Typescript</Text>
        </WrapperIcon>

        <WrapperIcon>
          <NextIcon />
          <Text>NEXTJS</Text>
        </WrapperIcon>

        <WrapperIcon>
          <ExpoIcon />
          <Text>EXPO</Text>
        </WrapperIcon>

        <WrapperIcon>
          <TauriIcon />
          <Text>Tauri</Text>
        </WrapperIcon>

        <WrapperIcon>
          <MysqlIcon />
          <Text>MYQL</Text>
        </WrapperIcon>

        <WrapperIcon>
          <SpringIcon />
          <Text>Spring Boot</Text>
        </WrapperIcon>

        <WrapperIcon>
          <SpringSecurityIcon />
          <Text>Spring security</Text>
        </WrapperIcon>

        <WrapperIcon>
          <JavaIcon />
          <Text>Java</Text>
        </WrapperIcon>

        <WrapperIcon>
          <GitIcon />
          <Text>GitHub</Text>
        </WrapperIcon>

        <WrapperIcon>
          <DockerIcon />
          <Text>Docker</Text>
        </WrapperIcon>

      </Content>
    </Container>
  );
}
