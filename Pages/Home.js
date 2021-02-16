import React from 'react';
import Ktiba from '../ktiba/ktiba';
import Carousel from '../carousel/carousel';
import Cards from '../Cards/cards';
export default function Home() {
    return(
        <div>
            <Ktiba/>
          <Carousel/>
          <Cards/>
        </div>
    )
  }