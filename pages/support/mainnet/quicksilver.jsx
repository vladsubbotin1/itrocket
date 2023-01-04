import React, { useContext, useEffect } from 'react'
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

	useEffect(() => {
		let typo = document.getElementsByClassName('ant-typography')

		for (let i = 0; i < typo.length; i++) {
			if (theme === 'light' && typo) typo[i].style.color = '#111'
			else typo[i].style.color = '#fff'
		}
	}, [theme])

	const markdown = `<h2 id="about">Quicksilver</h2>  

The Quicksilver Token is a Liquid Staking token with multiple use cases 

<br/>

* Website: https://quicksilver.zone/ 
* Explorer: https://testnet.itrocket.net/quicksilver/staking

<h2 id="guide">Guide</h2>  
Installation guide: <a href="https://github.com/itrocket-team/testnet_guides/tree/main/quicksilver
"  target="_blank" rel="noopener noreferrer">https://github.com/itrocket-team/testnet_guides/tree/main/quicksilver
</a> 
<h2 id="rpc">RPC, API, gRPC</h2> 

Public RPC - https://quicksilver-mainnet-rpc.itrocket.net  

Public API - https://quicksilver-mainnet-api.itrocket.net 

Public gRPC - http://65.109.92.79:15090


### peers 
~~~bash
4559f4c24037bfad4791b2a6d6d5c769a16cad53@65.109.92.79:15656
~~~

### addrbook:  

~~~bash
wget -O $HOME/.quicksilverd/config/addrbook.json https://raw.githubusercontent.com/itrocket-team/testnet_guides/main/quicksilver/addrbook.json
~~~


<h2 id="snap">Snapshot</h2> 

Sorry, not supported yet

<h2 id="sync">State Sync</h2> 

Stop the service 

~~~bash
sudo systemctl stop quicksilverd
~~~

Configure

~~~bash
cd $HOME 
peers="4559f4c24037bfad4791b2a6d6d5c769a16cad53@65.109.92.79:15656"  
SNAP_RPC=65.109.92.79:15657
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.quicksilverd/config/config.toml 
sed -i.bak -e "s/^snapshot-interval *=.*/snapshot-interval = \"2000\"/" $HOME/.quicksilverd/config/app.toml 
LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height); \ 
BLOCK_HEIGHT=$((LATEST_HEIGHT - 2000)); \ 
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash) 
~~~

Check if the state sync information available

~~~bash
echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH
~~~

Configure the state sync
~~~bash
sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\\1true| ; \
s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\\1\"$SNAP_RPC,$SNAP_RPC\"| ; \
s|^(trust_height[[:space:]]+=[[:space:]]+).*$|\\1$BLOCK_HEIGHT| ; \
s|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\\1\"$TRUST_HASH\"| ; \
s|^(seeds[[:space:]]+=[[:space:]]+).*$|\\1\"\"|" $HOME/.quicksilverd/config/config.toml
~~~

Clean old data

~~~bash
quicksilverd tendermint unsafe-reset-all --home $HOME/.quicksilverd --keep-addr-book
~~~
Restart the service and check the log

~~~bash
sudo systemctl restart quicksilverd && sudo journalctl -u quicksilverd -f
~~~	
`

	return (
		<>
			<Head>
				<title>ITRocket - Support Provider</title>
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
