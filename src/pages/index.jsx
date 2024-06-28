import styled from 'styled-components'

import { Botao } from '@/components/Botao'
import Cabecalho from '@/components/Cabecalho'
import CardLivro from '@/components/CardLivro'

const PaginaInicial = () => {
  return (
    <Container>
      <Cabecalho />
      <Main>
        <ContainerBotao>
          <Botao>+ Adicionar Livro</Botao>
        </ContainerBotao>
        <ContainerCards>
          <CardLivro titulo="O Senhor dos Anéis" autor="J. R. R. Tolkien" paginas={1200} status="Lendo" />
        </ContainerCards>
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

const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  padding: 0em 7em 2em 7em;
  gap: 40px;
`

export default PaginaInicial
