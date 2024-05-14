import React from 'react';
import {Container, Content} from "@/app/components/Slider/styles";
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import {ProjectCard} from "@/app/components/ProjectCard";
import {Project} from "@/app/interface/project";

interface Props {
  projects: Project[];
}

const Slider = ({
  projects
}: Props) => {
  return (
    <Container>
      <Content
        navigation={true}
        grabCursor={false}
        draggable={false}
        loop={true}
        spaceBetween={10}
        breakpoints={{
          1378: {
            slidesPerView: 3,
          },
          998: {
            slidesPerView: 2,
          },
          625: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        modules={[Navigation]}
        preventClicksPropagation={true}
        preventClicks={true}
        scrollbar={{ draggable: false, hide: true }}
        slideToClickedSlide={false}
        pagination={{ clickable: true }}
      >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <ProjectCard
            src={project.src}
            alt={project.alt}
            title={project.title}
            git={project.git}
            tecnologies={project.technologies}
          />
        </SwiperSlide>
      ))}
      </Content>
    </Container>
  );
};

export default Slider;
