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

const nibiru = () => {
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

### Nibiru  
Unlock leverage at scale for the Cosmos ecosystem
<br/><br/>

* Website: https://nibiru.fi/
* Discord: https://discord.gg/sgPw8ZYfpQ/
* Twitter: https://twitter.com/NibiruChain/
* Medium: https://blog.nibiru.fi/
* Github: https://github.com/NibiruChain/

<h2 id="guide">Guide</h2> 

Installation guide: 

https://github.com/itrocket-team/testnet_guides/tree/main/nibiru</a>


<h2 id="rpc">RPC, API, gRPC</h2> 

Public RPC - <a href="http://65.109.92.79:12657" target="_blank" rel="noopener noreferrer">http://65.109.92.79:12657</a>  

Public API - http://65.109.92.79:12317  

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


Stop the service 

~~~bash
sudo systemctl stop nibid
~~~

Configure

~~~bash
cd $HOME 
peers="a08e5b25443d038b08230177456ee23196509dd5@65.109.92.79:12656" 
config=$HOME/.nibid/config/config.toml 
SNAP_RPC=65.109.92.79:12657
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $config 
sed -i.bak -e "s/^snapshot-interval *=.*/snapshot-interval = \"2000\"/" $HOME/.nibid/config/app.toml 
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
nibid tendermint unsafe-reset-all --home $HOME/.nibid --keep-addr-book
~~~
Restart the service and check the log

~~~bash
sudo systemctl restart nibid && sudo journalctl -u nibid -f
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
export default nibiru
