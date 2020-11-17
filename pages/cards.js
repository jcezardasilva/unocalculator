import Title from '../components/title/Title'
import Link from 'next/link'

export default function FirstPost() {
    return (
        <div className="container">
                <Title>
                    UNO CALCULATOR
                </Title>
            <h2>
                <Link href="/players">
                    <a>players</a>
                </Link>
            </h2>
        </div>
    )
}