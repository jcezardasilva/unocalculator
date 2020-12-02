import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'
import Title from '../components/title/Title'
import Footer from "../components/footer/Footer"
import Player from "../components/player/Player";

export default function Match({ players }) {
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
                    {players.map((player) => (
                        <Player name={player.name} points={player.points} key={player.name}></Player>
                    ))}
                </ul>
            </main>
            <Footer>Todos os direitos reservados</Footer>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { client, db } = await connectToDatabase();
    const isConnected = await client.isConnected();
    const players = await db
        .collection("players")
        .find({}, {name: 1, points: 1 , _id: 0})
        .toArray();
    return {
        props: {
            isConnected,
            players: JSON.parse(JSON.stringify(players))
        },
    }
}