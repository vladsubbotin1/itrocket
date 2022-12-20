import React, { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../../../styles/Support.module.scss'
import Header from '../../../comps/Header'
import SideMenu from '../../../comps/SideMenu'
import { ThemeContext } from '../../_app.jsx'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import 'highlight.js/styles/github.css'

const celestia = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)
	const [current, setCurrent] = useState('1')

	useEffect(() => {
		let typo = document.getElementsByClassName('ant-typography')

		for (let i = 0; i < typo.length; i++) {
			if (theme === 'light' && typo) typo[i].style.color = '#111'
			else typo[i].style.color = '#fff'
		}
	}, [theme])

	const markdown = `<h2 id="about">About</h2>

### Celestia
Celestia is the first modular blockchain network. It is a modular consensus and data network, built to enable anyone to easily deploy their own blockchain with minimal overhead.
<br/><br/>

* Website: <a href="https://celestia.org">https://celestia.org</a>  

* Discord: <a href="https://discord.com/invite/YsnTPcSfWQ">https://discord.com/invite/YsnTPcSfWQ</a> 

* Telegram: <a href="https://t.me/CelestiaCommunity">https://t.me/CelestiaCommunity</a>  

* Twitter <a href="https://twitter.com/CelestiaOrg"> https://twitter.com/CelestiaOrg</a>  

* Github: <a href="https://github.com/celestiaorg">https://github.com/celestiaorg</a>  

<h2 id="guide">Guide</h2> 
<a href="https://docs.celestia.org/nodes/overview/" target="_blank" rel="noopener referrer">Official documentation</a>
<a href="https://github.com/marutyan/testnet_guides/tree/main/celestia" target="_blank" rel="noopener referrer">Set up Validator node</a>
<a href="https://github.com/marutyan/testnet_guides/blob/main/celestia/bridge.md" target="_blank" rel="noopener referrer">Set up Bridge node</a>
<a href="https://github.com/marutyan/testnet_guides/blob/main/celestia/light.md" target="_blank" rel="noopener referrer">Set up Light node</a>
<a href="https://github.com/marutyan/testnet_guides/blob/main/celestia/full.md" target="_blank" rel="noopener referrer">Set up Full node</a>  

<h2 id="rpc">RPC, API, gRPC</h2> 

Public RPC: <a href="http://65.109.92.79:11657/">http://65.109.92.79:11657	</a>    

Public API: <a href="http://65.109.92.79:11317/">http://65.109.92.79:11317</a>   

Public gRPc: <a href="http://65.109.92.79:11090">http://65.109.92.79:11090</a>  


### peers 
~~~bash
1afcd97b0bf289700378e18b45dc1f927917bba0@65.109.92.79:11656
~~~


### addrbook:  

~~~bash
wget -O $HOME/.celestia-app/config/addrbook.json https://raw.githubusercontent.com/itrocket-team/testnet_guides/main/celestia/addrbook.json
~~~

<h2 id="snap">Snapshot</h2> 

~~~bash
cd $HOME
rm -rf ~/.celestia-app/data
mkdir -p ~/.celestia-app/data
SNAP_NAME=$(curl -s https://snaps.qubelabs.io/celestia/ | \
egrep -o ">mamaki.*tar" | tr -d ">")
wget -O - https://snaps.qubelabs.io/celestia/\${SNAP_NAME} | tar xf - \
-C ~/.celestia-app/data/
~~~

<h2 id="sync">State Sync</h2> 

### State Sync:  
Sorry, not supported yet

`

	return (
		<>
			<Head>
				<title>ITRocket - Support Provider 🚀</title>
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
				</main>
			</div>
		</>
	)
}
export default celestia
