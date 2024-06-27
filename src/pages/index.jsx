import styled from 'styled-components'

import { Botao } from '@/components/Botao'
import Cabecalho from '@/components/Cabecalho'

const PaginaInicial = () => {
  return (
    <Container>
      <Cabecalho />
      <Main>
        <ContainerBotao>
          <Botao>+ Adicionar Livro</Botao>
        </ContainerBotao>
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

const ContainerBotao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default PaginaInicial
