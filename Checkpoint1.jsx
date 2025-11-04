import './App.css';
import fotolua from './assets/Quantum_moon.webp';

const iconeClimaPlaneta = (clima) => {
  const climas = {
    "gelado": "❄️",
    "quente e seco": "🥵",
    "temperado": "😊",
    "tempestuoso": "⛈️",
  };
  return climas[clima.toLowerCase()] || "❔";
};

const iconeClimaEspacial = (clima) => {
  const climas = {
    "calmo": "☀️",
    "ventos solares": "🛰️",
    "chuva de meteoros": "☄️",
    "nebula densa quântica": "🌌",
  };
  return climas[clima.toLowerCase()] || "❔";
};

const iconeUmidadeSolar = (umidade) => {
  const umidades = {
    "baixa": "💧",
    "média": "💧💧",
    "alta": "💧💧💧",
  };
  return umidades[umidade.toLowerCase()] || "❔";
};

const iconeRadiacao = (radiacao) => {
  const radiacoes = {
    "baixa": "✅",
    "moderada": "⚠️",
    "alta": "☢️",
  };
  return radiacoes[radiacao.toLowerCase()] || "❔";
};

function DashboardEspacial({
  comandante,
  progresso,
  planetaNome,
  planetaTemperatura,
  planetaGravidade,
  planetaClima,
  planetaDescricao,
  climaEspacial,
  umidadeSolar,
  radiacao,
  quantico,
  relatorio
}) {
  const corDaBarra = progresso < 30 ? "#e74c3c" : progresso < 70 ? "#f39c12" : "#2ecc71";

  return (
    <div className="painel">
      <h1>Boas vindas, Comandante {comandante}!</h1>
      <p>Data de hoje: {new Date().toLocaleDateString('pt-BR')}</p>

      <div className="info-bloco">
        <h2>Status da Missão</h2>
        <p>Progresso para {planetaNome}</p>
        <div className="barra-progresso-container">
          <div
            className="barra-progresso-preenchimento"
            style={{
              width: `${progresso}%`,
              backgroundColor: corDaBarra,
            }}
          ></div>
        </div>
        <p className="progresso-texto">
          {parseFloat(progresso).toFixed(1)}% da jornada completa
        </p>
      </div>

      <div className="info-bloco">
        <h2>Info do Planeta: {planetaNome}</h2>
        <ul>
          <li>Temperatura: {planetaTemperatura}</li>
          <li>Gravidade: {planetaGravidade}</li>
          <li>Clima: {planetaClima} {iconeClimaPlaneta(planetaClima)}</li>
        </ul>
        <p>{planetaDescricao}</p>
      </div>

      <div className="info-bloco">
        <h2>Visão do tempo espacial</h2>
        <ul>
          <li>Clima: {climaEspacial} {iconeClimaEspacial(climaEspacial)}</li>
          <li>Umidade Solar: {umidadeSolar} {iconeUmidadeSolar(umidadeSolar)}</li>
          <li>Radiação Cósmica: {radiacao} {iconeRadiacao(radiacao)}</li>
          <li>Grau Quântico: {quantico} ⚛️</li>
        </ul>
      </div>

      <div className="info-bloco">
        <h2>Relatório de Bordo</h2>
        <ol>
          {relatorio.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
        <h2>Foto registrada da lua quantica pelo batedor</h2>
        <img src={fotolua} alt="FotoLua" className="foto-lua" />
      </div>
    </div>
  );
};

export default function App() {
  const eventosDaMissao = [
    'Saída da órbita do Recanto lenhoso.',
    'Projeção da nave ativo.',
    'Saindo batedor.',
    'Modo camera ativado.',
    'Uma fotografia foi tirada.',
    'Preparando modulo de pouso.',
    'Preperar para impacto.',
    'Pouso concluído com sucesso.'
  ];
  const progressoDaMissao = 80;
  return (
    <DashboardEspacial
      comandante="Gabriel Michelini"
      progresso={progressoDaMissao}
      planetaNome="Lua Quântica"
      planetaTemperatura="-19C"
      planetaGravidade="4.5g"
      planetaClima="Gelado"
      planetaDescricao="A Lua Quântica é uma lua miste"
      climaEspacial="nebula densa quântica"
      umidadeSolar="Baixa"
      radiacao="Alta"
      relatorio={eventosDaMissao}
      quantico="100%"
    />
  );
}