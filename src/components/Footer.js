import React from 'react'

function Footer() {
    return (
                <footer style={{ backgroundColor: '#381269', color: 'white',  padding: '0.2em'}}>
            <div className="container py-3 d-flex align-items-center justify-content-between">
                <div>
                   <logo>POWERPLAY</logo>
                </div>
                <div className="text-end">
                    <p className="mb-0">Siguenos en Nuestras Redes Sociales </p>
                </div>
                <div className="ms-5">
                    <p className="mb-0">Copyright &copy; {new Date().getFullYear()} </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
