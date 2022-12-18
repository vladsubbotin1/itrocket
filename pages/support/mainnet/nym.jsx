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

### NYM
Building the next generation of privacy infrastructure  

Explorer: https://explorer.nymtech.net/network-components/mixnodes

<br/><br/>

* Website: https://nymtech.net/ 
* Github: https://github.com/nymtech
* Discord: https://discord.gg/nym   
* Telegram: https://t.me/nymchan  
* Twitter: https://twitter.com/nymproject  
* Medium: https://medium.com/nymtech

<h2 id="guide">Guide</h2>  
Mixnode installation guide: <a href="https://github.com/marutyan/testnet_guides/tree/main/nym" target="_blank" rel="noopener noreferrer">https://github.com/marutyan/testnet_guides/tree/main/nym</a> 

<h2 id="rpc">RPC, API, gRPC</h2> 

Sorry, not supported


<h2 id="snap">Snapshot</h2> 

Sorry, not supported

<h2 id="sync">State Sync</h2> 

Sorry, not supported
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
