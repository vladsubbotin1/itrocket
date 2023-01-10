import { useContext, useEffect } from 'react'
import styles from '@styles/Support.module.scss'
import Header from '@components/Header'
import SideMenu from '@components/SideMenu'
import HeadSupport from '@components/HeadSupport.jsx'
import CodeSnippet from '@components/CodeSnippet.jsx'
import { ThemeContext } from '../../_app.jsx'
import 'highlight.js/styles/github.css'

const haqq = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)

	useEffect(() => {
		let typo = document.getElementsByClassName('ant-typography')

		for (let i = 0; i < typo.length; i++) {
			if (theme === 'light' && typo) typo[i].style.color = '#111'
			else typo[i].style.color = '#fff'
		}
	}, [theme])

	return (
		<>
			<HeadSupport />

			<Header />

			<div className={styles.container}>
				<SideMenu />
				<main className={styles.MainColumn}>
					<h2 id='about'>Haqq</h2>
					<ul>
						<li>
							<span>Website: </span>
							<a
								href='https://islamiccoin.net/  '
								target='_blank'
								rel='noopener referrer'
							>
								https://islamiccoin.net/
							</a>
						</li>
						<li>
							<span>Explorer: </span>
							<a
								href='https://testnet.itrocket.net/haqq/staking'
								target='_blank'
								rel='noopener referrer'
							>
								https://testnet.itrocket.net/haqq/staking
							</a>
						</li>
					</ul>
					<h2 id='guide'>Guide</h2>
					<p>
						<span>ITRocket Team installation guide: </span>
						<a
							href='https://github.com/marutyan/testnet_guides/tree/main/haqq'
							target='_blank'
							rel='noopener referrer'
						>
							https://github.com/marutyan/testnet_guides/tree/main/haqq
						</a>
					</p>

					<h2 id='rpc'>RPC, API, gRPC</h2>
					<p>
						<span>Public RPC: </span>
						<a
							href='https://celestia-testnet-rpc.itrocket.net'
							target='_blank'
							rel='noopener referrer'
						>
							https://haqq-testnet-rpc.itrocket.net
						</a>
					</p>
					<p>
						<span>Public API: </span>
						<a
							href='https://celestia-testnet-api.itrocket.net'
							target='_blank'
							rel='noopener referrer'
						>
							https://haqq-testnet-api.itrocket.net
						</a>
					</p>
					<p>
						<span>Public gRPc: </span>
						<a
							href='http://65.109.92.79:11090'
							target='_blank'
							rel='noopener referrer'
						>
							http://65.109.92.79:19090
						</a>
					</p>
					<h3>peers:</h3>
					<CodeSnippet
						theme={theme}
						code='b87ae2a43e27bd0360ea1b868c8cb9e98d612fce@65.109.92.79:19656'
					/>

					<h2 id='snap'>Snapshot</h2>
					<p>Sorry, not supported yet ¯\_(ツ)_/¯</p>

					<h2 id='sync'>State Sync</h2>
					<p>
						If you don't want to wait for a long synchronization, you can use
						our State Sync guide.
					</p>
					<p>Stop the service</p>
					<CodeSnippet theme={theme} code='sudo systemctl stop haqqd' />
					<p>Configure</p>
					<CodeSnippet
						theme={theme}
						code={`cd $HOME 
peers="b87ae2a43e27bd0360ea1b868c8cb9e98d612fce@haqq-testnet-peer.itrocket.net:443"  
SNAP_RPC="https://haqq-testnet-rpc.itrocket.net:443"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \\"$peers\\"/" $HOME/.haqqd/config/config.toml 
sed -i.bak -e "s/^snapshot-interval *=.*/snapshot-interval = \\"1000\\"/" $HOME/.haqqd/config/app.toml 
LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height);
BLOCK_HEIGHT=$((LATEST_HEIGHT - 1000));
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash) `}
					/>
					<p>Check if the state sync information available</p>
					<CodeSnippet
						theme={theme}
						code='echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH'
					/>
					<p>Configure the state sync</p>
					<CodeSnippet
						theme={theme}
						code='sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\1true| ;
s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\1\"$SNAP_RPC,$SNAP_RPC\"| ;
s|^(trust_height[[:space:]]+=[[:space:]]+).*$|\1$BLOCK_HEIGHT| ;
s|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\1\"$TRUST_HASH\"| ;
s|^(seeds[[:space:]]+=[[:space:]]+).*$|\1\"\"|" $HOME/.haqqd/config/config.toml'
					/>
					<p>Clean old data</p>
					<CodeSnippet
						theme={theme}
						code='haqqd tendermint unsafe-reset-all --home $HOME/.haqqd --keep-addr-book'
					/>
					<p>Restart the service and check the log</p>
					<CodeSnippet
						theme={theme}
						code='sudo systemctl restart haqqd && sudo journalctl -u haqqd -f'
					/>
				</main>
			</div>
		</>
	)
}
export default haqq
