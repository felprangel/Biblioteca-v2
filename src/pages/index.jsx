import Cabecalho from "@/components/Cabecalho"
import styled from "styled-components"

const Teste = () => {
  return (
    <>
      <Cabecalho />
      <Main>Hello World</Main>
    </>
  )
}

const Main = styled.main`
  background-color: #F0EEF1;
  box-shadow: inset 0px 5px 15px -3px rgba(0,0,0,0.1);
`

export default Teste