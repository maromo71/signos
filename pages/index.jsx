import SignoCard from "../components/SignoCard"
import signosData from "../data/signos.json"

export default function Home() {
  return (
    <div className="App">
      <h1>Baralho dos Signos</h1>
      <div className="signos-container">
        {signosData.map((item) => (
        <SignoCard
          signo={item.signo}
          imagem={item.imagem}
          dataInicio={item.dataInicio}
          dataFim={item.dataFim}
        />
        ))}
      </div>
    </div>
  )
}

