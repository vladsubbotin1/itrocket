import React, { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '@styles/Support.module.scss'
import Header from '@components/Header'
import SideMenu from '@components/SideMenu'
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

### Humans
We are creating a scalable blockchain providing the economy of the heart driven AI, placing the humans at the facefront of the AI evolution.

explorer: https://explorer.humans.zone/humans-testnet
<br/><br/>

* Website: https://humans.ai/  
* Discord: https://discord.gg/humansdotai  
* Medium: https://medium.com/humansdotai     
* Twitter: https://twitter.com/humansdotai  

<h2 id="guide">Guide</h2>  
Installation guide: <a href="https://github.com/itrocket-team/testnet_guides/tree/main/humans" target="_blank" rel="noopener referrer">https://github.com/itrocket-team/testnet_guides/tree/main/humans</a>


<h2 id="rpc">RPC, API, gRPC</h2> 

Public RPC - http://65.109.92.79:17657  

Public API - http://65.109.92.79:17317  

Public gRPC - http://65.109.92.79:17090


### peers 
~~~bash
6ef7d7d851917ed86dece6f81c8c2c315a93ca9c@65.109.92.79:17656
~~~

### addrbook:  

~~~bash
wget -O $HOME/.humans/config/addrbook.json https://raw.githubusercontent.com/itrocket-team/testnet_guides/main/humans/addrbook.json
~~~


<h2 id="snap">Snapshot</h2> 

Sorry, not supported yet

<h2 id="sync">State Sync</h2> 

Stop the service 

~~~bash
sudo systemctl stop humansd
~~~

Configure

~~~bash
cd $HOME 
peers="6ef7d7d851917ed86dece6f81c8c2c315a93ca9c@65.109.92.79:17656"  
SNAP_RPC=65.109.92.79:17657
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.humans/config/config.toml 
sed -i.bak -e "s/^snapshot-interval *=.*/snapshot-interval = \"2000\"/" $HOME/.humans/config/app.toml 
LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height); \ 
BLOCK_HEIGHT=$((LATEST_HEIGHT - 2000)); \ 
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash) 
~~~

Check is the state sync information available

~~~bash
echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH
~~~

Configure the state sync
~~~bash
sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\\1true| ; 
s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\\1\"$SNAP_RPC,$SNAP_RPC\"| ; 
s|^(trust_height[[:space:]]+=[[:space:]]+).*$|\\1$BLOCK_HEIGHT| ; 
s|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\\1\"$TRUST_HASH\"| ; 
s|^(seeds[[:space:]]+=[[:space:]]+).*$|\\1\"\"|" $HOME/.humans/config/config.toml
~~~

Clean old data

~~~bash
humansd tendermint unsafe-reset-all --home $HOME/.humans --keep-addr-book
~~~
Restart the service and check the log

~~~bash
sudo systemctl restart humansd && sudo journalctl -u humansd -f
~~~
`

	return (
		<>
			<Head>
				<title>ITRocket - Support Provider </title>
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
export default axelar
