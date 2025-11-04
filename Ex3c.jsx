function MenuRestaurante() {
  const pratos = [
    {nome: "Bife de Chorizo", preco: 50.00, descricao: "Um bife de chorizo ao ponto. Feito pelo chefe Michelini com suas 5 estrelas Michelin"},
    {nome: "Macarrão a Carbonara", preco: 39.90, descricao: "Um macarrão cremoso com molho branco e bacon picado. Feito pelo chefe Michelini"},
    {nome: "Pizza De Calabresa", preco: 40.00, descricao: "Pizza de 8 pedaços com queijo e um molho de tomate artesanal além de calabresa pi"},
    {nome: "Palha Italina Gourmet", preco: 20.90, descricao: "Uma sobremesa que consiste em um brigadeiro com biscoito gourmet. Feito pelo c"}
  ];


  return (
    <div>
      <h1>Cardápio do Restaurante Michelin</h1>
      <div className='menu-grid'>
        {pratos.map((prato, index) => (
          <div key={index} className='prato-card'>
            <h3>{prato.nome}</h3>
            <p className='preco'>R${prato.preco.toFixed(2)}</p>
            <p className='descricao'>{prato.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
