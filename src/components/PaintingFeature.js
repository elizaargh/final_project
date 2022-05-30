import { Carousel } from "react-bootstrap"
import React from "react";
import img from './paintingStock.jpg'

const PaintingFeature = () => {
    return(
        <>

        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img}
      alt="Stock Image: Outdoor, daylight. Person holds yoga mat."
    />
    <Carousel.Caption>
      <h2>Join Us</h2>
      <h4>Wednesday and Thursday evenings. Saturday afternoon.</h4>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<p></p>
<p></p>
</>
  
    )
}

export default PaintingFeature;