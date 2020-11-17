import Head from 'next/head'
import Title from '../components/title/Title'
import Footer from "../components/footer/Footer"

export default function Players() {
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
                    <li>
                        Jogador 1
                    </li>
                    <li>
                        Jogador 2
                    </li>
                </ul>
            </main>
            <Footer>Todos os direitos reservados</Footer>
        </div>
    )
}