import { useContext } from 'react'
import { ThemeContext } from '../../_app.jsx'
import styles from '@styles/Support.module.scss'
import Header from '@components/Header'
import SideMenu from '@components/SideMenu'
import HeadSupport from '@components/HeadSupport.jsx'
import CodeSnippet from '@components/CodeSnippet.jsx'
import 'highlight.js/styles/github.css'

const celestia = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)

	return (
		<>
			<HeadSupport />

			<Header />

			<div className={styles.container}>
				<SideMenu />
				<main className={styles.MainColumn}>
					<h2 id='about'>Lava</h2>
					<p>
						Lava pairs Providers with Applications for scalable, private and
						uncensored access to Web3.
					</p>
					<ul>
						<li>
							<span>Website: </span>
							<a
								href='https://lavanet.xyz/'
								target='_blank'
								rel='noopener referrer'
							>
								https://lavanet.xyz/
							</a>
						</li>
						<li>
							<span>Explorer: </span>
							<a
								href='https://testnet.itrocket.net/lava/staking'
								target='_blank'
								rel='noopener referrer'
							>
								https://testnet.itrocket.net/lava/staking
							</a>
						</li>
					</ul>
					<h2 id='guide'>Guide</h2>
					<a
						href='https://github.com/marutyan/testnet_guides/tree/main/lava'
						target='_blank'
						rel='noopener referrer'
					>
						ITRocket-team installation guide
					</a>
					<h2 id='rpc'>RPC, API, gRPC</h2>
					<p>
						<span>Public RPC: </span>
						<a
							href='https://lava-testnet-rpc.itrocket.net'
							target='_blank'
							rel='noopener referrer'
						>
							https://lava-testnet-rpc.itrocket.net
						</a>
					</p>
					<p>
						<span>Public API: </span>
						<a
							href='https://lava-testnet-api.itrocket.net'
							target='_blank'
							rel='noopener referrer'
						>
							https://lava-testnet-api.itrocket.net
						</a>
					</p>
					<p>
						<span>Public gRPc: </span>
						<a
							href='http://65.109.92.79:20090'
							target='_blank'
							rel='noopener referrer'
						>
							http://65.109.92.79:11090
						</a>
					</p>
					<h3>peers:</h3>
					<CodeSnippet
						theme={theme}
						code={`3693ea5a8a9c0590440a7d6c9a98a022ce3b2455@65.109.92.79:20656`}
					/>
					<h3>seed:</h3>
					<CodeSnippet
						theme={theme}
						code={`eb7832932626c1c636d16e0beb49e0e4498fbd5e@65.108.231.124:20656`}
					/>
					<h3>addrbook (update every hour):</h3>
					<CodeSnippet
						theme={theme}
						code={`curl https://snaps.itrocket.net/testnet/lava/addrbook.json > ~/.lava/config/addrbook.json`}
					/>
					<h2 id='snap'>Snapshot (update every day)</h2>
					<CodeSnippet
						theme={theme}
						code={`sudo systemctl stop lavad
cp $HOME/.lava/data/priv_validator_state.json $HOME/.lava/priv_validator_state.json.backup
rm -rf $HOME/.lava/data
curl https://snaps.itrocket.net/testnet/lava/snap_lava.tar.lz4 | lz4 -dc - | tar -xf - -C $HOME/.lava
mv $HOME/.lava/priv_validator_state.json.backup $HOME/.lava/data/priv_validator_state.json`}
					/>
					<h2 id='sync'>State Sync</h2>
					<p>Sorry, not supported yet ¯\_(ツ)_/¯</p>
				</main>
			</div>
		</>
	)
}
export default celestia
