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

const nibiru = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)

	useEffect(() => {
		let typo = document.getElementsByClassName('ant-typography')

		for (let i = 0; i < typo.length; i++) {
			if (theme === 'light' && typo) typo[i].style.color = '#111'
			else typo[i].style.color = '#fff'
		}
	}, [theme])

	const markdown = `<h2 id="about">Nibiru</h2> 
	
Unlock leverage at scale for the Cosmos ecosystem
<br/><br/>

* Website: https://nibiru.fi/
* Explorer: https://testnet.itrocket.net/nibiru/staking


<h2 id="guide">Guide</h2> 

Installation guide: 

https://github.com/itrocket-team/testnet_guides/tree/main/nibiru</a>


<h2 id="rpc">RPC, API, gRPC</h2> 

Public RPC - https://nibiru-testnet-rpc.itrocket.net  

Public API - https://nibiru-testnet-api.itrocket.net  

Public gRPC - http://65.109.92.79:12090

### peers 
~~~bash
a08e5b25443d038b08230177456ee23196509dd5@65.109.92.79:12656
~~~

### addrbook:  

~~~bash
wget -O $HOME/.nibid/config/addrbook.json https://raw.githubusercontent.com/itrocket-team/testnet_guides/main/nibiru/addrbook.json
~~~

<h2 id="snap">Snapshot</h2> 

Sorry, not supported yet

<h2 id="sync">State Sync</h2> 

https://github.com/itrocket-team/testnet_guides/blob/main/nibiru/statesync.md
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
export default nibiru
