function PrevisaoTempo({temperatura, clima, cidade, umidade}) {
  const getIcone = (clima) => {
    const climas = {
      "ensolarado": "☀️",
      "nublado": "☁️",
      "chuvoso": "🌧️",
      "tempestuoso": "⛈️",
      "nevando": "🌨️",
    };
    return climas[clima.toLowerCase()] || "🌡️";
  };


  const getCorTemperatura = (temp) => {
    if (temp < 15) return "#00bfff";
    if (temp < 25) return "#ffa500";
    return "#d0021b";
  };


  return (
    <div style={{
      border: "2px solid #ddd",
      borderRadius: "15px",
      padding: "20px",
      textAlign: "center",
      background: "linear-gradient(135deg, #2602a3ff, #1e79beff)",
      color: "white",
      maxWidth: "250px",
      minWidth: "200px"
    }}>
      <h2 style={{margin: "0 0 15px 0"}}>{cidade}</h2>
      <div style={{fontSize: "60px", margin: "10px 0"}}>
        {getIcone(clima)}
      </div>
      <div style={{
        fontSize: "48px",
        fontWeight: "bold",
        color: getCorTemperatura(temperatura),
        textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
      }}>
        {temperatura}°C
      </div>
      <p style={{fontSize: "18px", margin: "10px 0"}}>{clima}</p>
      <p style={{fontSize: "14px", opacity: 0.8}}>Umidade: {umidade}%</p>
    </div>
  );
}


function App() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginTop: "50px",
    flexWrap: "wrap",
    width: "100%"
  };


  return (
    <div style={containerStyle}>
      <PrevisaoTempo Temperatura={-2} clima="nevando" cidade="Rio de Janeiro" umidade={60} />
      <PrevisaoTempo Temperatura={24} clima="nublado" cidade="sao paulo" umidade={70} />
      <PrevisaoTempo Temperatura={100} clima="ensolarado" cidade="Iraja umidade={70}" />
    </div>
  );
}


export default App;