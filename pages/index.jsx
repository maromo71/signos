import SignoCard from "../components/SignoCard"

export default function Home() {
  return (
    <div className="App">
      <h1>Baralho dos Signos</h1>
      <div className="signos-container">
        <SignoCard
          signo="Aquário"
          imagem="https://www.zodiacsign.com/images/aquarius.jpg"
          dataInicio="20/01"
          dataFim="18/02"
        />
         <SignoCard
          signo="Peixes"
          imagem="https://www.zodiacsign.com/images/pisces.jpg"
          dataInicio="19/02"
          dataFim="20/03"
        />
        <SignoCard
          signo="Áries"
          imagem="https://www.zodiacsign.com/images/aries.jpg"
          dataInicio="21/03"
          dataFim="19/04"
        />
        <SignoCard
          signo="Touro"
          imagem="https://www.zodiacsign.com/images/taurus.jpg"
          dataInicio="20/04"
          dataFim="20/05"
        />
        <SignoCard
          signo="Gêmeos"
          imagem="https://www.zodiacsign.com/images/gemini.jpg"
          dataInicio="21/05"
          dataFim="20/06"
        />
        <SignoCard
          signo="Câncer"
          imagem="https://www.zodiacsign.com/images/cancer.jpg"
          dataInicio="21/06"
          dataFim="22/07"
        />
        <SignoCard
          signo="Leão"
          imagem="https://www.zodiacsign.com/images/leo.jpg"
          dataInicio="23/07"
          dataFim="22/08"
        />
        <SignoCard
          signo="Virgem"
          imagem="https://www.zodiacsign.com/images/virgo.jpg"
          dataInicio="23/08"
          dataFim="22/09"
        />
        <SignoCard
          signo="Libra"
          imagem="https://www.zodiacsign.com/images/libra.jpg"
          dataInicio="23/09"
          dataFim="22/10"
        />
        <SignoCard
          signo="Escorpião"
          imagem="https://www.zodiacsign.com/images/scorpio.jpg"
          dataInicio="23/10"
          dataFim="21/11"
        />
        <SignoCard
          signo="Sagitário"
          imagem="https://www.zodiacsign.com/images/sagitarius.jpg"
          dataInicio="22/11"
          dataFim="21/12"
        />
        <SignoCard
          signo="Capricórnio"
          imagem="https://www.zodiacsign.com/images/pisces.jpg"
          dataInicio="22/12"
          dataFim="19/01"
        />
      </div>
    </div>
  )
}

