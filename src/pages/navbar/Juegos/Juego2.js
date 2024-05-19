import React from 'react'
import './Juego.css'
import Card from 'react-bootstrap/Card';

const Juego2 = () => {
  return (
    <div>
    <Card style={{ width: '23.5rem' }}>
    <Card.Img variant="top" src="/images/l2.jpg" />
    <Card.Body>
      <Card.Title>Juego lorem</Card.Title>
      <Card.Text>
      $35.000
      </Card.Text>
    </Card.Body>
  </Card>
  </div>

  )
}
export default Juego2