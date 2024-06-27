import styled from 'styled-components'

import Cabecalho from '@/components/Cabecalho'
import { Botao } from '@/components/Botao'

const PaginaInicial = () => {
  return (
    <Container>
      <Cabecalho />
      <Main>
        <Botao>+ Adicionar Livro</Botao>
      </Main>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15% 1fr;
  height: 100vh;
`

const Main = styled.main`
  background-color: var(--cinza);
  box-shadow: inset 0px 5px 15px -3px var(--cor-sombra);
`

export default PaginaInicial
