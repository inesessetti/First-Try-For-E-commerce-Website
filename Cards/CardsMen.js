import React from 'react';
import {Card, CardDeck, Button} from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './cards.css';


function CW(){
    return(
  <div className='article'>
        <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
  <Card>
    <Card.Img variant="top" src="https://kind-wescoff-1a57a1.netlify.app/static/media/men_1.5f0f380a.webp" />
    <Card.Body>
      <Card.Title className="titre">Shirt</Card.Title>
      <Card.Text>
      T-Shirt for all sizes
      </Card.Text>
      <Button className="ButtonMezyen">Buy Now</Button>
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" src="https://kind-wescoff-1a57a1.netlify.app/static/media/men_1.5f0f380a.webp" />
    <Card.Body>
      <Card.Title className="titre">Shirt</Card.Title>
      <Card.Text>
      T-Shirt for all sizes{' '}
      </Card.Text>
      <Button className="ButtonMezyen">Buy Now</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://kind-wescoff-1a57a1.netlify.app/static/media/men_1.5f0f380a.webp" />
    <Card.Body>
      <Card.Title className="titre">Shirt</Card.Title>
      <Card.Text>
        <div>
            <p>T-Shirt for all sizes</p>
        </div>
      </Card.Text>
      <Button className="ButtonMezyen">Buy Now</Button>
    </Card.Body>
    
  </Card>
</CardDeck>

</div>
    )
} 
export default CW;