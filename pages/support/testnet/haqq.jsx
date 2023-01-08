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

	const markdown = `<h2 id="about">Haqq</h2>

* Website: https://islamiccoin.net/  
* Explorer: https://testnet.itrocket.net/haqq/staking  

<h2 id="guide">Guide</h2> 
Installation guide: 

https://github.com/marutyan/testnet_guides/tree/main/haqq

<h2 id="rpc">RPC, API, gRPC</h2> 

### Public RPC

~~~bash
https://haqq-testnet-rpc.itrocket.net
~~~ 

### Public API

~~~bash
https://haqq-testnet-api.itrocket.net
~~~

### Public gRPC

~~~bash
http://65.109.92.79:19090
~~~

### peers 

~~~bash
b87ae2a43e27bd0360ea1b868c8cb9e98d612fce@65.109.92.79:19656
~~~


<h2 id="snap">Snapshot</h2> 

Sorry, not supported yet

<h2 id="sync">State Sync</h2> 

### State Sync: 

https://github.com/itrocket-team/testnet_guides/blob/main/haqq/statesync.md
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
