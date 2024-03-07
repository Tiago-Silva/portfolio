import styled from "styled-components";
import { FaGithub } from 'react-icons/fa';


export const Container = styled.div`
  background-color: #212121;
  padding: 10px;

  width: 30%;
  height: 10%;

  max-height: 400px;

  border: 2px solid #7c3aed;
  border-radius: 4px;
`;

export const WrapperImage = styled.div`
  width: 100%;
  max-height: 300px;
  object-fit: cover;

  overflow-y: hidden;
`;

export const Footer = styled.div`
  padding: 10px;
`;

export const FooterTitle = styled.h1`
  font-size: 1.5rem;
  color: #7c3aed;
  font-weight: 700;
  margin: 0;
`;

export const FooterText = styled.h1`
  font-size: 0.9rem;
  color: #828282;
  margin: 0;
`;

export const WrapperGitInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const GitIcon = styled(FaGithub)`
  font-size: 1.2rem;
  color: #7c3aed;
  font-weight: 700;
`;

export const GitLink = styled.a`
  font-size: 1.2rem;
  color: #7c3aed;
  font-weight: 700;
  text-decoration: none;
`;