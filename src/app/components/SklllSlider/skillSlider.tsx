import React from 'react';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';
import {Container, Content, Text, WrapperIcon} from "@/app/components/SklllSlider/styles";
import {Skill} from "@/app/interface/skill";

interface Props {
  skills: Skill[];
}

const SkillSlider = ({
  skills
}: Props) => {
  return (
    <Container>
      <Content
        grabCursor={false}
        draggable={false}
        loop={true}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1378: {
            slidesPerView: 7,
          },
          998: {
            slidesPerView: 4,
          },
          625: {
            slidesPerView: 3,
          },
          340: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        modules={[Autoplay]}
      >
      {skills.map((skill, index) => (
        <SwiperSlide key={index}>
          <WrapperIcon>
            <skill.icon />
            <Text>{skill.text}</Text>
          </WrapperIcon>
        </SwiperSlide>
      ))}
      </Content>
    </Container>
  );
};

export default SkillSlider;
