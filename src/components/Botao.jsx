import styled from 'styled-components'

export const Botao = props => {
  return (
    <BotaoStyle>
      <span className="destaque">{props.texto}</span>
      {props.isLoading || props.children}
    </BotaoStyle>
  )
}

const BotaoStyle = styled.button`
  padding: 0.7em 1em;
  margin: 1.5em 0;

  font-size: 1.4em;
  font-weight: 600;

  cursor: pointer;

  border: none;
  border-radius: 0.7em;
  background-color: var(--cinza);
  outline: none;
  transition: 150ms linear;
  &:hover {
    background-color: var(--cinza-escuro);
  }
  .destaque {
    text-transform: uppercase;
  }
`
