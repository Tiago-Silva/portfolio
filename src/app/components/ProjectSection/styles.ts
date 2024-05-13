import styled from "styled-components";


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

