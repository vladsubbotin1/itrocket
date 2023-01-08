import React, { useContext, useEffect } from 'react'
import styles from '@styles/Support.module.scss'
import Header from '@components/Header'
import SideMenu from '@components/SideMenu'
import HeadSupport from '@components/HeadSupport.jsx'
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

	const markdown = `<h2 id="about">Uptick</h2>

The Business Grade Multi-Chain NFT Infrastructure for Web 3.0
<br/><br/>

* Website: https://uptick.network/  
* Explorer: https://testnet.itrocket.net/uptick/staking 

<h2 id="guide">Guide</h2> 
Installation guide: 
<a href="https://github.com/itrocket-team/testnet_guides/tree/main/uptick" target="_blank" rel="noopener noreferrer">https://github.com/itrocket-team/testnet_guides/tree/main/upticky</a>


<h2 id="rpc">RPC, API, gRPC</h2> 

Public RPC - https://uptick-testnet-rpc.itrocket.net  

Public API - https://uptick-testnet-api.itrocket.net 

Public gRPC - http://65.109.92.79:10090

### peers 

~~~bash
peers: 86f50af23369997882ca3988eabeba998b4f07cc@65.109.92.79:10656
~~~

### addrbook: 

~~~bash
wget -O $HOME/.uptickd/addrbook.json https://raw.githubusercontent.com/itrocket-team/testnet_guides/main/uptick/addrbook.json
~~~

<h2 id="snap">Snapshot</h2> 

Sorry, not supported yet

<h2 id="sync">State Sync</h2> 

### State Sync: 

https://github.com/itrocket-team/testnet_guides/blob/main/uptick/statesync.md

`

	return (
		<>
			<HeadSupport />

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
export default axelar
