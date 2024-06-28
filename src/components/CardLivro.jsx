import styled from 'styled-components'

import { Botao } from './Botao'

const CardLivro = props => {
  return (
    <Card>
      <h2>{props.titulo}</h2>
      <h2>{props.autor}</h2>
      <h2>{props.paginas} Páginas</h2>
      <Botao>{props.status}</Botao>
      <BotaoRemover>Remover</BotaoRemover>
    </Card>
  )
}

const Card = styled.div`
  background-color: var(--branco);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  border-radius: 0.8em;
  padding: 1.5em;
  gap: 15px;
  box-shadow: 10px 10px 10px -3px var(--cor-sombra);
  h2 {
    margin: 0;
    font-size: 1.3em;
    font-weight: 600;
  }
`

const BotaoRemover = styled(Botao)`
  &:hover {
    background-color: var(--vermelho);
  }
`

export default CardLivro
