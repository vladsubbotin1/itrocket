import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import styles from '@styles/Support.module.scss'
import Header from '@components/Header'
import SideMenu from '@components/SideMenu'
import CodeSnippet from '@components/CodeSnippet.jsx'
import { ThemeContext } from '../../_app.jsx'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import 'highlight.js/styles/github.css'

const axelar = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)

	useEffect(() => {
		let typo = document.getElementsByClassName('ant-typography')

		for (let i = 0; i < typo.length; i++) {
			if (theme === 'light' && typo) typo[i].style.color = '#111'
			else typo[i].style.color = '#fff'
		}
	}, [theme])

	const markdown = `<h2 id="about">Quicksilver</h2>  

The Quicksilver Token is a Liquid Staking token with multiple use cases 

<br/>

* Website: https://quicksilver.zone/ 
* Explorer: https://mainnet.itrocket.net/quicksilver/staking

<h2 id="guide">Guide</h2>  
Installation guide: <a href="https://github.com/itrocket-team/testnet_guides/tree/main/quicksilver
"  target="_blank" rel="noopener noreferrer">https://github.com/itrocket-team/testnet_guides/tree/main/quicksilver
</a> 
<h2 id="rpc">RPC, API, gRPC</h2> 

Public RPC - https://quicksilver-mainnet-rpc.itrocket.net  

Public API - https://quicksilver-mainnet-api.itrocket.net 

Public gRPC - http://65.109.92.79:15090


### peers 
~~~bash
4559f4c24037bfad4791b2a6d6d5c769a16cad53@65.109.92.79:15656
~~~

### addrbook:  

~~~bash
wget -O $HOME/.quicksilverd/config/addrbook.json https://raw.githubusercontent.com/itrocket-team/testnet_guides/main/quicksilver/addrbook.json
~~~


<h2 id="snap">Snapshot</h2> 

Sorry, not supported yet

<h2 id="sync">State Sync</h2> 

https://github.com/itrocket-team/testnet_guides/blob/main/quicksilver/statesync.md	
`

	return (
		<>
			<Head>
				<title>ITRocket - Project Support </title>
				<meta
					name='description'
					content='ITRocket 🚀 | Crypto Multipurpose Project'
				/>
			</Head>

			<Header />

			<div className={styles.container}>
				<SideMenu />
				<main className={styles.MainColumn}>
					<ReactMarkdown
						linkTarget='_blank'
						rehypePlugins={[rehypeHighlight, rehypeRaw]}
						remarkPlugins={[remarkGfm]}
					>
						{markdown}
					</ReactMarkdown>

					{/* <h2 id='about'>Celestia</h2>
					<p>
						Celestia is the first modular blockchain network. It is a modular
						consensus and data network, built to enable anyone to easily deploy
						their own blockchain with minimal overhead.
					</p>
					<ul>
						<li>
							<span>Website: </span>
							<a
								href='https://celestia.org'
								target='_blank'
								rel='noopener referrer'
							>
								https://celestia.org
							</a>
						</li>
						<li>
							<span>Explorer: </span>
							<a
								href='https://testnet.itrocket.net/celestia/stakin'
								target='_blank'
								rel='noopener referrer'
							>
								https://testnet.itrocket.net/celestia/staking
							</a>
						</li>
					</ul>
					<h2 id='guide'>Guide</h2>
					<a
						href='https://docs.celestia.org/nodes/overview/'
						target='_blank'
						rel='noopener referrer'
					>
						Official documentation
					</a>
					<a
						href='https://github.com/marutyan/testnet_guides/tree/main/celestia'
						target='_blank'
						rel='noopener referrer'
					>
						Set up Validator node
					</a>
					<a
						href='https://github.com/marutyan/testnet_guides/blob/main/celestia/bridge.md'
						target='_blank'
						rel='noopener referrer'
					>
						Set up Bridge node
					</a>
					<a
						href='https://github.com/marutyan/testnet_guides/blob/main/celestia/light.md'
						target='_blank'
						rel='noopener referrer'
					>
						Set up Light node
					</a>
					<a
						href='https://github.com/marutyan/testnet_guides/blob/main/celestia/full.md'
						target='_blank'
						rel='noopener referrer'
					>
						Set up Full node
					</a>
					<h2 id='rpc'>RPC, API, gRPC</h2>
					<p>
						<span>Public RPC: </span>
						<a
							href='https://celestia-testnet-rpc.itrocket.net'
							target='_blank'
							rel='noopener referrer'
						>
							https://celestia-testnet-rpc.itrocket.net
						</a>
					</p>
					<p>
						<span>Public API: </span>
						<a
							href='https://celestia-testnet-api.itrocket.net'
							target='_blank'
							rel='noopener referrer'
						>
							https://celestia-testnet-api.itrocket.net
						</a>
					</p>
					<p>
						<span>Public gRPc: </span>
						<a
							href='http://65.109.92.79:11090'
							target='_blank'
							rel='noopener referrer'
						>
							http://65.109.92.79:11090
						</a>
					</p>
					<h3>peers:</h3>
					<CodeSnippet
						theme={theme}
						code={`1afcd97b0bf289700378e18b45dc1f927917bba0@65.109.92.79:11656`}
					/>
					<h3>addrbook:</h3>
					<CodeSnippet
						theme={theme}
						code={`wget -O $HOME/.celestia-app/config/addrbook.json https://raw.githubusercontent.com/itrocket-team/testnet_guides/main/celestia/addrbook.json`}
					/>
					<h2 id='snap'>Snapshot</h2>
					<CodeSnippet
						theme={theme}
						code={`cd $HOME
rm -rf ~/.celestia-app/data
mkdir -p ~/.celestia-app/data
SNAP_NAME=$(curl -s https://snaps.qubelabs.io/celestia/ | \
egrep -o ">mamaki.*tar" | tr -d ">")
wget -O - https://snaps.qubelabs.io/celestia/\${SNAP_NAME} | tar xf - \
-C ~/.celestia-app/data/`}
					/>
					<h2 id='sync'>State Sync</h2>
					<p>Sorry, not supported yet ¯\_(ツ)_/¯</p> */}
				</main>
			</div>
		</>
	)
}
export default axelar
