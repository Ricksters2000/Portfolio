import React, {useState} from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap'
import ProjectImg from './ProjectImg';
import imagePaths from '../../images/images';
import './Image.css';

const ProjectImgs = ({title, alt}) => {
    const [index, setIndex] = useState(0);

    const imgs = imagePaths[title];
    if(typeof imgs === 'string') return(<div className='d-block img' style={{backgroundImage: `url(${imgs})`}}></div>)
    return(
        <Carousel activeIndex={index} onSelect={(newIndex => setIndex(newIndex))} interval={20000}>
            {imgs?.map((img, i) => 
                <CarouselItem key={i}>
                    {/* <ProjectImg className="d-block w-100" filename={img} alt={alt} /> */}
                    {/* <img className="d-block w-100" alt={alt} src={img} /> */}
                    <div className='d-block img' style={{backgroundImage: `url(${img})`}}></div>
                </CarouselItem>
            )}
        </Carousel>
    )
}

export default ProjectImgs;