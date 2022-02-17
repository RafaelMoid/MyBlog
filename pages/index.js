import styled from 'styled-components';
import Link from 

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
  <div>

    <header>
      <Title>Rafael Moid</Title>
      <img src="..." />
    </header>
    <body>

    </body>

  </div>
  )
}
