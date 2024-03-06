import styled from "styled-components";


export const Container = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
`;

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #7c3aed;
  font-weight: 700;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const WrapperImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 10rem;
  padding: 0 0.625rem;
  @media (min-width: 1024px) {
    max-width: none;
  }
`;

export const StyledImage = styled.div`
  aspect-ratio: 1 / 1;
  transform: rotate(3deg);
  border-radius: 0.5rem;
  background-color: #F9FAFB;
  overflow: hidden;

  max-width: 400px;
  max-height: 400px;

  img {
    /* margin-top: -80px; */
    object-fit: cover;
  }
`;

export const WrapperText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  word-wrap: break-word;
`;

export const Text = styled.h2`
  font-size: 1.2rem;
  color: #828282;
  text-align: justify;
`;