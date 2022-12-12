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

### Uptick Network

The Business Grade Multi-Chain NFT Infrastructure for Web 3.0
<br/><br/>

* Website: https://uptick.network/  
* Telegram: https://t.me/uptickproject  
* Twitter: https://twitter.com/uptickproject  
* Medium: https://medium.com/@uptickproject  
* Reddit: https://www.reddit.com/r/UptickNetwork/

<h2 id="guide">Guide</h2> 
Installation guide: 

https://github.com/marutyan/testnet_guides/tree/main/uptick

<h2 id="rpc">RPC, API, gRPC</h2> 

Public RPC - http://65.109.92.79:10657  

Public API - http://65.109.92.79:10317  

Public gRPC - http://65.109.92.79:10090

### peers 

~~~bash
peers: 86f50af23369997882ca3988eabeba998b4f07cc@65.109.92.79:10656
~~~

### addrbook: 

~~~bash
wget -O $HOME/.uptickd/addrbook.json https://raw.githubusercontent.com/marutyan/testnet_guides/main/uptick/addrbook.json
~~~

<h2 id="snap">Snapshot</h2> 

Sorry, not supported yet

<h2 id="sync">State Sync</h2> 

### State Sync: 

Stop the service 

~~~bash
sudo systemctl stop uptickd
~~~

Configure

~~~bash
cd $HOME peers="86f50af23369997882ca3988eabeba998b4f07cc@65.109.92.79:10656" 
config=$HOME/.uptickd/config/config.toml 
SNAP_RPC=65.109.92.79:10657
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $config 
sed -i.bak -e "s/^snapshot-interval *=.*/snapshot-interval = \"2000\"/" $HOME/.uptickd/config/app.toml 
LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height); \ 
BLOCK_HEIGHT=$((LATEST_HEIGHT - 2000)); \ 
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash) 
~~~

Сheck is the state sync information available

~~~bash
echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH
~~~

Configure the state sync
~~~bash
sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\\1true| ; \
s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\\1\"$SNAP_RPC,$SNAP_RPC\"| ; \
s|^(trust_height[[:space:]]+=[[:space:]]+).*$|\\1$BLOCK_HEIGHT| ; \
s|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\\1\"$TRUST_HASH\"| ; \
s|^(seeds[[:space:]]+=[[:space:]]+).*$|\\1\"\"|" $config
~~~

Clean old data

~~~bash
uptickd tendermint unsafe-reset-all --home $HOME/.uptickd --keep-addr-book
~~~
Restart the service and check the log

~~~bash
sudo systemctl restart uptickd && sudo journalctl -u uptickd -f
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
