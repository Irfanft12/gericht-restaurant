import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from 'react-icons/bs';
import { SubHeading } from '../../components';

import { images } from '../../constants';

import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  
  const scrollRef = React.useRef(null)

  const scroll = (direction) => {

    if (direction === "left") {
      scrollRef.current.scrollLeft -= 300
    } else {
      scrollRef.current.scrollLeft += 300
    }

  }

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram" />
        <h2 className='headtext__cormorant'>Photo Gallery</h2>
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button className='custom__button'>View More</button>
      </div>
      <div className='app__gallery-images'>
        <div className="app__gallery-images-container" ref={scrollRef}>
          {
            galleryImages.map((galleryImage, index) => (
              <div className='app__gallery-images-container-card' key={`gallery_image-${index + 1}`}>
                <img src={galleryImage} alt={galleryImage} />
                  <div className='gallery__image-icon-wrapper'>
                    <BsInstagram className='gallery__image-icon' />
                  </div>
              </div>
            ))
          }
        </div>
        <div>
          <BsArrowLeftShort className='gallery__arrow-icon gallery__arrow-icon-left' onClick={() => scroll("left")}/>
          <BsArrowRightShort className='gallery__arrow-icon gallery__arrow-icon-right' onClick={() => scroll("right")} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
