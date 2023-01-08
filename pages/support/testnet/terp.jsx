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

const Terp = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)

	useEffect(() => {
		let typo = document.getElementsByClassName('ant-typography')

		for (let i = 0; i < typo.length; i++) {
			if (theme === 'light' && typo) typo[i].style.color = '#111'
			else typo[i].style.color = '#fff'
		}
	}, [theme])

	const markdown = `<h2 id="about">Terp</h2>

* Website: https://terp.network/  
* Explorer: https://explorer.kjnodes.com/terp-test/staking  

<h2 id="guide">Guide</h2> 
Installation guide:

https://github.com/marutyan/testnet_guides/tree/main/terp

<h2 id="rpc">RPC, API, gRPC</h2> 

### Public RPC

~~~bash
https://terp-testnet-rpc.itrocket.net
~~~ 

### Public API

~~~bash
https://terp-testnet-api.itrocket.net 
~~~

### Public gRPC

~~~bash
http://65.109.92.79:13090
~~~

### peers 

~~~bash
51d48be3809bb8907c1ef5f747e53cdd0c9ded1b@65.109.92.79:13656
~~~


<h2 id="snap">Snapshot</h2> 

Sorry, not supported yet

<h2 id="sync">State Sync</h2> 

### State Sync: 

https://github.com/itrocket-team/testnet_guides/blob/main/terp/statesync.md
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
export default Terp
