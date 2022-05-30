import { Carousel } from "react-bootstrap"
import React from "react";
import ruok from "./r-u-ok.jpeg"
import couple from './communityTalks.jpg'
import herbs from './herbs.jpeg'

const HomeFeature = () => {
    return(
        <>

        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={herbs}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Free Workshops</h3>
      <p>Grow your own greens for apartment living.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={couple}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Community Talks</h3>
      <p>Meet the couple who are driving legeslation change on pesticide usage in our Regions</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ruok}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>This month:</h3>
      <p>R-U-OK? Community event. Join us to connect and ask R-U-OK?  </p>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<p></p>
<p></p>
</>
  
    )
}

export default HomeFeature;