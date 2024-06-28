import styled from 'styled-components'

export const Botao = props => {
  return (
    <BotaoStyle autoWidth={props.autoWidth} className={props.className}>
      {props.isLoading || props.children}
    </BotaoStyle>
  )
}

const BotaoStyle = styled.button`
  padding: 0.7em 1em;
  width: ${props => (props.autoWidth ? 'auto' : '100%')};

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
`
