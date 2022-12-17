import React, { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../../../styles/Support.module.scss'
import Header from '../../../comps/Header'
import SideMenu from '../../../comps/SideMenu'
import { ThemeContext } from '../../_app.jsx'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import 'highlight.js/styles/github.css'

const axelar = () => {
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

### Quicksilver
THE COSMOS LIQUID STAKING ZONE  

The Quicksilver Token is a Liquid Staking token with multiple use cases
<br/><br/>

* Website: https://quicksilver.zone/ 
* Discord: https://discord.com/invite/xrSmYMDVrQ   
* Telegram: https://t.me/quicksilverzone  
* Twitter: https://twitter.com/quicksilverzone  
* Medium: https://medium.com/quicksilverzone

<h2 id="guide">Guide</h2>  
Installation guide: <a href="https://github.com/marutyan/mainnet_guides/tree/main/quicksilver" rel="noopener noreferrer">https://github.com/marutyan/mainnet_guides/tree/main/quicksilver</a>

<h2 id="rpc">RPC, API, gRPC</h2> 

Public RPC - http://65.109.92.79:15657  

Public API - http://65.109.92.79:15317  

Public gRPC - http://65.109.92.79:15090


### peers 
~~~bash
4559f4c24037bfad4791b2a6d6d5c769a16cad53@65.109.92.79:15656
~~~

### addrbook:  

~~~bash
wget -O $HOME/.quicksilverd/config/addrbook.json https://raw.githubusercontent.com/marutyan/mainnet_guides/main/quicksilver/addrbook.json
~~~


<h2 id="snap">Snapshot</h2> 

Sorry, not supported yet

<h2 id="sync">State Sync</h2> 

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
