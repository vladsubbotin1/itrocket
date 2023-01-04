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

Stop the service 

~~~bash
sudo systemctl stop haqqd
~~~

Configure

~~~bash
cd $HOME 
peers="b87ae2a43e27bd0360ea1b868c8cb9e98d612fce@65.109.92.79:19656"  
SNAP_RPC=65.109.92.79:19657
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.haqqd/config/config.toml 
sed -i.bak -e "s/^snapshot-interval *=.*/snapshot-interval = \"1000\"/" $HOME/.haqqd/config/app.toml 
LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height); \ 
BLOCK_HEIGHT=$((LATEST_HEIGHT - 1000)); \ 
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
s|^(seeds[[:space:]]+=[[:space:]]+).*$|\\1\"\"|" $HOME/.haqqd/config/config.toml
~~~

Clean old data

~~~bash
haqqd tendermint unsafe-reset-all --home $HOME/.haqqd --keep-addr-book
~~~
Restart the service and check the log

~~~bash
sudo systemctl restart haqqd && sudo journalctl -u haqqd -f
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
