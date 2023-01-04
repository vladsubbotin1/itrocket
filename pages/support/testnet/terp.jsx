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

Stop the service 

~~~bash
sudo systemctl stop terpd
~~~

Configure

~~~bash
cd $HOME 
peers="51d48be3809bb8907c1ef5f747e53cdd0c9ded1b@65.109.92.79:13656"  
SNAP_RPC=65.109.92.79:13657
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.terp/config/config.toml 
sed -i.bak -e "s/^snapshot-interval *=.*/snapshot-interval = \"2000\"/" $HOME/.terp/config/app.toml 
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
s|^(seeds[[:space:]]+=[[:space:]]+).*$|\\1\"\"|" $HOME/.terp/config/config.toml
~~~

Clean old data

~~~bash
terpd tendermint unsafe-reset-all --home $HOME/.terp --keep-addr-book
~~~
Restart the service and check the log

~~~bash
sudo systemctl restart terpd && sudo journalctl -u terpd -f
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
