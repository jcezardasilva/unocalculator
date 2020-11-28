import Head from 'next/head'
import Title from '../components/title/Title'
import Footer from "../components/footer/Footer"
import Player from "../components/player/Player";

function Match({players}) {
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Title>
                    UNO CALCULATOR
                </Title>
                <ul>
                { players.map((player) => (
                    <Player name={player.name} points={player.points}></Player>
                ))}
                </ul>
            </main>
            <Footer>Todos os direitos reservados</Footer>
        </div>
    )
}


export async function getStaticProps(context) {
    const players = [
      { name: "Julio", points: 0 },
      { name: "Lili", points: 0 },
      { name: "Marcelo", points: 0 },
      { name: "Lilian", points: 0 }
    ]
    return {
      props: {
        players
      },
    }
  }

  export default Match;