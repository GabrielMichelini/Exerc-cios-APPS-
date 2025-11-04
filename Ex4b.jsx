function Cartaolivro({titulo, autor, genero}) {
  return (
    <div className='cartao pessoa'>
      <h2>{titulo}</h2>
      <p><strong>autor:</strong> {autor}</p>
      <p><strong>Genero:</strong> {genero}</p>
    </div>
  );
}


function App() {
  return(
    <div>
      <Cartaolivro titulo="As cronicas de michel" autor="Gabriel Michelini" genero="Romance" />
    </div>
  );
}




export default App


