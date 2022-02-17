

function Title(props) {
    return (
        <h1 style={{ color: props.color }}>{props.chielden}</h1>
    )
}

export default function Sobre() {
    return (
        <div>
            <header>
                <Title>Página sobre</Title>
                <img src="..." />
            </header>
        </div>
    )
}