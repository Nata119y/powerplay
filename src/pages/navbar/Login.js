import { Password } from 'phosphor-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  './LoginValidacion'
import LoginValidacion from './LoginValidacion'


 function Login() {
    const [values, setValues]=useState({
      email:'',
      password:''
    })

    const[errors, setErrors]= useState({})

    const handleInput=(event)=>{
        setValues(prev=>({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setValues(LoginValidacion(values));
     }

  return (
      <div className='d flex justify-content-center aling-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sing-In</h2>
            <form action=''onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Correo</strong></label>
                    <input type="email" placeholder='Enter Email' name='email' onChange={handleInput} className="form-control rouded-0"/>
                    <span>{errors.email && <span> console.error();</span>}</span>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Contraseña</strong></label>
                    <input type="password" placeholder='Enter Password' name='password' onChange={handleInput} className='form-control rounded-0'/>
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Login</strong></button>
                <p>Aceptas terminos y condiciones</p>
                <Link to='/signup' className='btn btn-default w-100 bg.light rounded-0 text-decoration-none'>Crear cuenta</Link>

            </form>

        </div>
      
    </div>
    
  )
}

export default Login
