import React from 'react';
import {Carousel} from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel.css';
function Carou(){
    return(
        <div className="C">
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://kind-wescoff-1a57a1.netlify.app/static/media/women_2.610d5668.webp"
      alt="First slide"
    />
    <Carousel.Caption className="Ca">
      <h3>Welcome To Our Clothes Store</h3>
      <p>We provide have the top clothing quality out there</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.shopify.com/s/files/1/0480/8340/2920/collections/Best-Clothing-Stores-men_1296x.jpg?v=1599568359"
      alt="Second slide"
    />

    <Carousel.Caption className="Ca">
      <h3>Here we Have clothes for Men</h3>
      <p>All Men wear are available in our store and you can shippable them everywhere</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://kind-wescoff-1a57a1.netlify.app/static/media/women_1.6bd3a290.webp"
      alt="Third slide"
    />

    <Carousel.Caption className="Ca">
      <h3>As well for Women</h3>
      <p>Find your unique style</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    );
};
export default Carou;