import styled from "styled-components";

export const Container = styled.footer`
  flex: 1;
  width: 100%;
  height: fit-content;
  position: static;

  bottom: 0;
  margin-bottom: 0;

  height: 5%;

  z-index: 2;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 0.2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Text = styled.h1`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: -15px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;