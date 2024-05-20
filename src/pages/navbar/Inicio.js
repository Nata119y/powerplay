import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'


export const Inicio = () => {
  return (
    <div class="contain">
      <>
      <img src="images/bg.jpg" alt=""/>
      <div class="header-content-container"> 
        <br></br>
              <div class="header-txt">
                <br></br>
                <br></br>
                  <h1>Compra tu <span>juego</span> <br></br> favorito aqui</h1>
                  <p>
                  En PowerPlay, nos apasiona brindarte la mejor experiencia en el mundo de los videojuegos. 
                </p>
                <div class="butons">
                    <a href="a" class="btn-1">Informacion</a>
                </div>
        </div>
    </div>
 </>
 <section class="popular container">
         <h2>Juegos populares</h2>
          <div class="popular-content">

            <img src="images/g1.jpg" alt=""/>
            <img src="images/g2.jpg" alt=""/>
            <img src="images/g3.jpg" alt=""/>
            <img src="images/g4.jpg" alt=""/>
            <img src="images/g5.jpg" alt=""/>
            <img src="images/g6.jpg" alt=""/>
            <img src="images/g7.jpg" alt=""/>

          </div>

    </section>
¿
  <div className='Card'>
      <div>
        <Card style={{ width: '23.5rem' }}>
        <Card.Img variant="top" src="/images/l1.jpg" />
        <Card.Body>
          <Card.Title>Juego lorem</Card.Title>
          <Card.Text>
           $27.000
          </Card.Text>
          <Link to='/juego1' className='lm'>Comprar</Link>
        </Card.Body>
      </Card>
      </div>

      <div>
        <Card style={{ width: '23.5rem' }}>
        <Card.Img variant="top" src="/images/l2.jpg" />
        <Card.Body>
          <Card.Title>Juego lorem</Card.Title>
          <Card.Text>
          $35.000
          </Card.Text>
          <Link to='/juego2' className='lm'>Comprar</Link>
        </Card.Body>
      </Card>
      </div>

      <div>
        <Card style={{ width: '23.5rem' }}>
        <Card.Img variant="top" src="/images/l3.jpg" />
        <Card.Body>
          <Card.Title>Juego lorem</Card.Title>
          <Card.Text>
          $30.000
          </Card.Text>
          <Link to='/juego3' className='lm'>Comprar</Link>
        </Card.Body>
      </Card>
      </div>

      <div>
        <Card style={{ width: '23.5rem' }}>
        <Card.Img variant="top" src="/images/l4.jpg" />
        <Card.Body>
          <Card.Title>Juego lorem</Card.Title>
          <Card.Text>
          $26.000
          </Card.Text>
          <Link to='/juego4' className='lm'>Comprar</Link>
        </Card.Body>
      </Card>
      </div>
      
      <div>
        <Card style={{ width: '23.5rem' }}>
        <Card.Img variant="top" src="/images/l5.jpg" />
        <Card.Body>
          <Card.Title>Juego lorem</Card.Title>
          <Card.Text>
          $27.000
          </Card.Text>
          <Link to='/juego5' className='lm'>Comprar</Link>
        </Card.Body>
      </Card>
      </div>

      <div>
        <Card style={{ width: '23.5rem' }}>
        <Card.Img variant="top" src="/images/l6.jpg" />
        <Card.Body>
          <Card.Title>Juego lorem</Card.Title>
          <Card.Text>
          $32.000
          </Card.Text>
          <Link to='/juego6' className='lm'>Comprar</Link>
        </Card.Body>
      </Card>
      </div>

      <div>
        <Card style={{ width: '23.5rem' }}>
        <Card.Img variant="top" src="/images/l7.jpg" />
        <Card.Body>
          <Card.Title>Juego lorem</Card.Title>
          <Card.Text>
          $33.000
          </Card.Text>
          <Link to='/juego7' className='lm'>Comprar</Link>
        </Card.Body>
      </Card>
      </div>

      <div>
        <Card style={{ width: '23.5rem' }}>
        <Card.Img variant="top" src="/images/l8.jpg" />
        <Card.Body>
          <Card.Title>Juego lorem</Card.Title>
          <Card.Text>
          $23.000
          </Card.Text>
          <Link to='/juego8' className='lm'>Comprar</Link>
        </Card.Body>
      </Card>
      </div>

      <div>
        <Card style={{ width: '23.5rem' }}>
        <Card.Img variant="top" src="/images/l9.jpg" />
        <Card.Body>
          <Card.Title>Juego lorem</Card.Title>
          <Card.Text>
          $34.000
          </Card.Text>
          <Link to='/juego9' className='lm'>Comprar</Link>
        </Card.Body>
      </Card>
      </div>
    </div>
    </div>
   
  )
}

export default Inicio
