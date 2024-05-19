import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div>
        <div className='d flex justify-content-center aling-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sign-Up</h2>
            <form action='' >
            <div className='mb-3'>
                    <label htmlFor='name'><strong>Nombre</strong></label>
                    <input type="text" placeholder='Enter Nombre' className="form-control rouded-0"/>
                </div>

                <div className='mb-3'>
                    <label htmlFor='email'><strong>Correo</strong></label>
                    <input type="email" placeholder='Enter Email' className="form-control rouded-0"/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Contraseña</strong></label>
                    <input type="password" placeholder='Enter Password' className='form-control rounded-0'/>
                </div>
                <button className='btn btn-success w-100 rounded-0'><strong>Sign up</strong></button>
                <p>Aceptas terminos y condiciones</p>
                <Link to='/login' className='btn btn-default w-100 bg.light rounded-0 text-decoration-none'>Login</Link>

            </form>

        </div>
      
    </div>
      
    </div>
  )
}

export default Signup
