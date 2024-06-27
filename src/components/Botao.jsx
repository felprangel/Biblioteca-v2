import { CircularProgress } from '@mui/material'

export const Botao = props => {
  return (
    <BotaoStyle>
      <span className="destaque">
        {props.isLoading ? <CircularProgress className="circular" /> : <>{props.texto}</>}
      </span>
      {props.isLoading || props.children}
    </BotaoStyle>
  )
}

const BotaoStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 3rem;
  padding: 0.9rem 1rem;

  font-size: 0.9rem;
  font-weight: 400;

  cursor: pointer;

  box-shadow: 0px 4px 4px var(--cor-sombra);
  border: none;
  border-radius: 0.4rem;
  background-color: var(--cinza);
  svg {
    font-size: 1.6rem;
    margin-right: 0.3rem;
  }
  &:hover {
    opacity: 0.8;
  }
  .destaque {
    text-transform: uppercase;
  }
  .circular {
    width: 1rem !important;
    height: 1rem !important;
    color: var(--branco);
    svg {
      margin-right: 0;
    }
  }
  &:disabled {
    opacity: 0.7;
  }
`
