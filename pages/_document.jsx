import { Html, Head, Main, NextScript } from 'next/document'
import { Value } from 'sass'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='icon' href='/whiteLogoCrop.ico' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin={Value.toString()}
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
