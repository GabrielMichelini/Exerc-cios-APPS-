import { useState } from 'react';
import './App.css';
function Termometro() {
  const [count, setCount] = useState(20);
  const getCorTemperatura = (count) => {
    if (count < 20) return "#4a90e2";
    if (count > 21) return "#ee2828ff";
  }


  return(
    <div>
      <h1>Termômetro Digital</h1>
    </div>


    <div style={{color:getCorTemperatura(count)
    }}>
      <h2 className="bonito1"> Temperatura: {count} °C</h2>
      <button className="botao2" onClick={() => setCount(count + 2)}>🔥 Aquecer(+2 °C)</button>
      <button className="botao1" onClick={() => setCount(count - 2)}>❄️ Esfriar(-2 °C)</button>
    </div>
  )
}


export default Termometro
