import Cabecalho from '@/components/Cabecalho'
import styled from 'styled-components'

const Teste = () => {
	return (
		<Container>
			<Cabecalho />
			<Main>Hello World</Main>
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
	background-color: #f0eef1;
	box-shadow: inset 0px 5px 15px -3px rgba(0, 0, 0, 0.1);
`

export default Teste
