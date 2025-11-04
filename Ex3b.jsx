import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function ListaComida() {
  const comidas = ["Lasanha", "Bife de chorizo", "Pizza", "Macarrão a carbonara"]


  return (
    <div>
      <h2>Minhas comidas favoritas</h2>
      <ul>
        {comidas.map((comida, index) => (<li key={index}> {comida}</li>
        ))}
      </ul>
    </div>
  );
}




export default ListaComida