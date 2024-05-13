import styled from "styled-components";
import { Swiper } from 'swiper/react';


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
`;

export const Content = styled(Swiper)`
    height: 100%;
`;
