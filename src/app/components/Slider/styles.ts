import styled from "styled-components";
import { Swiper } from 'swiper/react';


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;

  margin-bottom: 10px;
`;

export const Content = styled(Swiper)`
    height: 100%;
`;
