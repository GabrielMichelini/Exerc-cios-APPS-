import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Saudacao({usuario}) {
  return (
    <h1>Boas vindas , {usuario}!</h1>
  );
}






export default function Myapp(){
  return (<Saudacao usuario = "Gabriel"/>)
}
