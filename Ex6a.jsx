import { useState } from 'react'; // Adicionado pois `useState` é utilizado


function MostrarEsconder() {
  const [mostrar, setMostrar] = useState(true);
  return(
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Esconder' : 'Mostrar'}
      </button>
      {mostrar && <p>Presta atenção na aula</p>}
    </div>
  )
}


export default MostrarEsconder


