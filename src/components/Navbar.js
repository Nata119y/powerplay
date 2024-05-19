import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Navbar, Container, Nav, NavDropdown, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


function OffcanvasExample() {

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 custom-navbar">
          <Container fluid>
            <div className=" d-flex align-items-center">
              <Navbar.Toggle  aria-controls={`offcanvasNavbar-expand-${expand}`}/>
              <Navbar.Offcanvas 
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start" 
              >
                <Offcanvas.Header closeButton >
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Secciones
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3 flex-column"> 
                    <Link to='/inicio' className='scc'>Inicio</Link>
                    <Link to='/productos' className='scc'>Productos</Link>
                    <Link to='/contacto' className='scc'>Contacto</Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
              <div className="ms-3">
                <a href="/">
             
                </a>
              </div>
            </div>

            <Link to='/login' className='icon-se'><FontAwesomeIcon icon={faUserCircle} size="2x" color= '#FFFF'/></Link>

          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
