import React from 'react';
import {Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Inicio}  from './pages/navbar/Inicio'
import Productos from './pages/navbar/Productos'
import Contacto from './pages/navbar/Contacto'
import Login from './pages/navbar/Login'
import Signup from './pages/navbar/Signup'
import LoginValidacion from './pages/navbar/LoginValidacion'
import Juego1 from './pages/navbar/Juegos/Juego1'
import Juego2 from './pages/navbar/Juegos/Juego2'
import Juego3 from './pages/navbar//Juegos/Juego3'
import Juego4 from './pages/navbar/Juegos/Juego4'
import Juego5 from './pages/navbar/Juegos/Juego5'
import Juego6 from './pages/navbar/Juegos/Juego6'
import Juego7 from './pages/navbar/Juegos/Juego7'
import Juego8 from './pages/navbar/Juegos/Juego8'
import Juego9 from './pages/navbar/Juegos/Juego9'



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/producto' element={<Productos/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/LoginValidacion' element={<LoginValidacion/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/juego1' element={<Juego1/>}/>
        <Route path='/juego2' element={<Juego2/>}/>
        <Route path='/juego3' element={<Juego3/>}/>
        <Route path='/juego4' element={<Juego4/>}/>
        <Route path='/juego5' element={<Juego5/>}/> 
        <Route path='/juego6' element={<Juego6/>}/>
        <Route path='/juego7' element={<Juego7/>}/>
        <Route path='/juego8' element={<Juego8/>}/>
        <Route path='/juego9' element={<Juego9/>}/>
        <Route/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
