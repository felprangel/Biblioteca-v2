import { GlobalStyle } from '@/styles/globals'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
      <GlobalStyle />
		</>
	)
}
