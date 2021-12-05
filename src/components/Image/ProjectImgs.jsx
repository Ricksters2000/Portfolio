import React, {useState} from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap'
import ProjectImg from './ProjectImg';

const ProjectImgs = ({images, alt}) => {
    if(typeof images === 'string') return(<ProjectImg filename={images} alt={alt} />)

    const [index, setIndex] = useState(0);
    return(
        <Carousel activeIndex={index} onSelect={(newIndex => setIndex(newIndex))}>
            {images.map((img, i) => 
                <CarouselItem key={i}>
                    <ProjectImg className="d-block w-100" filename={img} alt={alt} />
                </CarouselItem>
            )}
        </Carousel>
    )
}

export default ProjectImgs;