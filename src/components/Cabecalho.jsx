import styled from 'styled-components'

const Cabecalho = () => {
  return (
    <Header>
      <h1>BookMark</h1>
    </Header>
  )
}

const Header = styled.header`
  background-color: #fffbfb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7em;
  h1 {
    font-size: 2.5em;
  }
`

export default Cabecalho
