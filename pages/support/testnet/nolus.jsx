import React, { useContext, useEffect } from 'react'
import styles from '@styles/Support.module.scss'
import Header from '@components/Header'
import SideMenu from '@components/SideMenu'
import { ThemeContext } from '../../_app.jsx'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import 'highlight.js/styles/github.css'
import HeadSupport from '@components/HeadSupport.jsx'

const axelar = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)

	useEffect(() => {
		let typo = document.getElementsByClassName('ant-typography')

		for (let i = 0; i < typo.length; i++) {
			if (theme === 'light' && typo) typo[i].style.color = '#111'
			else typo[i].style.color = '#fff'
		}
	}, [theme])

	const markdown = `<h2 id="about">Nolus</h2>
Bringing innovation to money markets through a Web3 financial suite designed to make DeFi better for you <br/> <br/> 

* Website: https://nolus.io/ 
* Explorer: https://testnet.itrocket.net/nolus/staking   

<h2 id="guide">Guide</h2>  
ITRocket-team installation guide: 

https://github.com/itrocket-team/testnet_guides/blob/main/nolus/

<h2 id="rpc">RPC, API, gRPC</h2> 

Public RPC - https://nolus-testnet-rpc.itrocket.net  

Public API - https://nolus-testnet-api.itrocket.net  

Public gRPC - http://65.109.92.79:16090


### seed 
~~~bash
67be97f5ef69a4f149fbef7970ba888e5b2c2cff@65.108.231.124:16656
~~~


### peers 
~~~bash
721e40c2c9abefa358f9428bc396cdbe05520312@65.109.92.79:16656
~~~

### addrbook:  

~~~bash
wget -O $HOME/.nolus/config/addrbook.json https://raw.githubusercontent.com/itrocket-team/testnet_guides/main/nolus/addrbook.json
~~~


<h2 id="snap">Snapshot</h2> 

Sorry, not supported yet

<h2 id="sync">State Sync</h2> 

https://github.com/itrocket-team/testnet_guides/blob/main/nolus/statesync.md

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
