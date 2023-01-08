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

	const markdown = `<h2 id="about">SEI</h2>

* Website: https://www.seinetwork.io/  
* Explorer: https://testnet.itrocket.net/sei/staking

<h2 id="guide">Guide</h2> 

ITRocket Team installation guide: 

https://github.com/itrocket-team/testnet_guides/tree/main/sei

<h2 id="rpc">RPC, API, gRPC</h2> 

### Public RPC

~~~bash
https://sei-testnet-rpc.itrocket.net
~~~

### Public API

~~~bash
https://sei-testnet-api.itrocket.net 
~~~

### Public gRPC

~~~bash
http://65.109.92.79:14090
~~~

### peers 

~~~bash
23566c31c1a4f852eb581cee56ce68b4b77756b1@65.109.92.79:14656
~~~

### addrbook: 

~~~bash
N/A
~~~

<h2 id="snap">Snapshot</h2> 

Sorry, not supported yet

<h2 id="sync">State Sync</h2> 

### State Sync: 

Sorry, not supported yet
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
