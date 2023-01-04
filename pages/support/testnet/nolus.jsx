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

Stop the service 

~~~bash
sudo systemctl stop nolusd
~~~

Configure

~~~bash
cd $HOME 
peers="721e40c2c9abefa358f9428bc396cdbe05520312@65.109.92.79:16656"  
SNAP_RPC=65.109.92.79:16657
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.nolus/config/config.toml 
sed -i.bak -e "s/^snapshot-interval *=.*/snapshot-interval = \"2000\"/" $HOME/.nolus/config/app.toml 
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
sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\\1true| ; \
s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\\1\"$SNAP_RPC,$SNAP_RPC\"| ; \
s|^(trust_height[[:space:]]+=[[:space:]]+).*$|\\1$BLOCK_HEIGHT| ; \
s|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\\1\"$TRUST_HASH\"| ; \
s|^(seeds[[:space:]]+=[[:space:]]+).*$|\\1\"\"|" $HOME/.nolus/config/config.toml
~~~

Clean old data

~~~bash
nolusd tendermint unsafe-reset-all --home $HOME/.nolus --keep-addr-book
~~~
Restart the service and check the log

~~~bash
sudo systemctl restart nolusd && sudo journalctl -u nolusd -f
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
