import React from 'react'
import './Juego.css'
import Card from 'react-bootstrap/Card';


function Juego1() {
  return (
      <div className='Card'>
      <div>
        <Card style={{ width: '23.5rem' }}>
        <Card.Img variant="top" src="/images/l1.jpg" />
        <Card.Body>
          <Card.Title>Juego lorem</Card.Title>
          <Card.Text>
           $27.000
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    </div>
  )
}
export default Juego1