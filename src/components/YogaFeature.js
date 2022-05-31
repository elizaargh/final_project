import { Carousel } from "react-bootstrap"
import React from "react";
import img from './yogaSizecopy.jpg'
import Image from 'react-bootstrap/Image'

const yogaFeature = () => {
    return(
        <>

        <Carousel fade>
  <Carousel.Item>
    <Image fluid
    bsPrefix="imageResizing"
      className="d-block w-100"
      
      src={img}
      alt="Stock Image: Indoor, daylight. Yoga class in session."
    />
    <Carousel.Caption>
      <h2>Join Us</h2>
      <h4>Every Monday, Tuesday and Saturday.</h4>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<p></p>
<p></p>
</>
  
    )
}

export default yogaFeature;