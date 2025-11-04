import React, { useState } from 'react';


function Lista_Itens() {
  const itens = [
    "computador",
    "celular",
    "balas",
    "chocolates",
    "album da copa 2026"
  ];


  return (
    <div>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}


function AbrirFechar() {
  const [abrir, setAbrir] = useState(true);


  return (
    <div>
      <div className='cofre'>
        <p>Cofre Digital</p>
      </div>
      <div>
        <p>🔒</p>
      </div>
      <div>
        <button onClick={() => setAbrir(!abrir)}>
          {abrir ? 'fechar 🔒' : 'abrir 🔒'}
        </button>
       
        {abrir && <Lista_Itens />}
       
      </div>
    </div>
  );
}


export default AbrirFechar;
