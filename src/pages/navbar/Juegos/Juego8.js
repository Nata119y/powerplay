import React from 'react'
import './Juego.css'
import Card from 'react-bootstrap/Card';

const Juego8 = () => {
  return (
    <div>
        <Card style={{ width: '23.5rem' }}>
        <Card.Img variant="top" src="/images/l8.jpg" />
        <Card.Body>
          <Card.Title>Juego lorem</Card.Title>
          <Card.Text>
          $23.000
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
  )
}
export default Juego8