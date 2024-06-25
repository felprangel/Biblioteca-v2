import { GlobalStyle } from '@/styles/globals'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
      <GlobalStyle />
		</>
	)
}
