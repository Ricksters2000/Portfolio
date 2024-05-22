/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Tilt from 'react-tilt';
import { Carousel, CarouselItem } from 'react-bootstrap';
// import ProjectImg from './ProjectImg';
import imagePaths from '../../images/images';
import './Image.css';

const ProjectImgs = ({ title, alt }) => {
  const [index, setIndex] = useState(0);

  const imgs = imagePaths[title];
  if (typeof imgs === 'string')
    return (
      <Tilt
        options={{
          reverse: false,
          max: 8,
          perspective: 1000,
          scale: 1,
          speed: 300,
          transition: true,
          axis: null,
          reset: true,
          easing: 'cubic-bezier(.03,.98,.52,.99)',
        }}
      >
        <div className="d-block img" aria-label={alt} style={{ backgroundImage: `url(${imgs})` }} />
      </Tilt>
    );
  //   return <div className="d-block img" style={{ backgroundImage: `url(${imgs})` }}></div>;
  return (
    <Carousel activeIndex={index} onSelect={(newIndex) => setIndex(newIndex)} interval={20000}>
      {imgs?.map((img) => (
        <CarouselItem key={`carousel-${img}`}>
          {/* <ProjectImg className="d-block w-100" filename={img} alt={alt} /> */}
          {/* <img className="d-block w-100" alt={alt} src={img} /> */}
          <div className="d-block img" style={{ backgroundImage: `url(${img})` }} />
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default ProjectImgs;
