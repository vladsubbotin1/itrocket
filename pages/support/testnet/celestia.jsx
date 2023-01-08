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
					<h2 id='about'>Celestia</h2>
					<p>
						Celestia is the first modular blockchain network. It is a modular
						consensus and data network, built to enable anyone to easily deploy
						their own blockchain with minimal overhead.
					</p>
					<ul>
						<li>
							<span>Website: </span>
							<a
								href='https://celestia.org'
								target='_blank'
								rel='noopener referrer'
							>
								https://celestia.org
							</a>
						</li>
						<li>
							<span>Explorer: </span>
							<a
								href='https://testnet.itrocket.net/celestia/stakin'
								target='_blank'
								rel='noopener referrer'
							>
								https://testnet.itrocket.net/celestia/staking
							</a>
						</li>
					</ul>
					<h2 id='guide'>Guide</h2>
					<a
						href='https://docs.celestia.org/nodes/overview/'
						target='_blank'
						rel='noopener referrer'
					>
						Official documentation
					</a>
					<a
						href='https://github.com/marutyan/testnet_guides/tree/main/celestia'
						target='_blank'
						rel='noopener referrer'
					>
						Set up Validator node
					</a>
					<a
						href='https://github.com/marutyan/testnet_guides/blob/main/celestia/bridge.md'
						target='_blank'
						rel='noopener referrer'
					>
						Set up Bridge node
					</a>
					<a
						href='https://github.com/marutyan/testnet_guides/blob/main/celestia/light.md'
						target='_blank'
						rel='noopener referrer'
					>
						Set up Light node
					</a>
					<a
						href='https://github.com/marutyan/testnet_guides/blob/main/celestia/full.md'
						target='_blank'
						rel='noopener referrer'
					>
						Set up Full node
					</a>
					<h2 id='rpc'>RPC, API, gRPC</h2>
					<p>
						<span>Public RPC: </span>
						<a
							href='https://celestia-testnet-rpc.itrocket.net'
							target='_blank'
							rel='noopener referrer'
						>
							https://celestia-testnet-rpc.itrocket.net
						</a>
					</p>
					<p>
						<span>Public API: </span>
						<a
							href='https://celestia-testnet-api.itrocket.net'
							target='_blank'
							rel='noopener referrer'
						>
							https://celestia-testnet-api.itrocket.net
						</a>
					</p>
					<p>
						<span>Public gRPc: </span>
						<a
							href='http://65.109.92.79:11090'
							target='_blank'
							rel='noopener referrer'
						>
							http://65.109.92.79:11090
						</a>
					</p>
					<h3>peers:</h3>
					<CodeSnippet
						theme={theme}
						code={`1afcd97b0bf289700378e18b45dc1f927917bba0@65.109.92.79:11656`}
					/>
					<h3>addrbook:</h3>
					<CodeSnippet
						theme={theme}
						code={`wget -O $HOME/.celestia-app/config/addrbook.json https://raw.githubusercontent.com/itrocket-team/testnet_guides/main/celestia/addrbook.json`}
					/>
					<h2 id='snap'>Snapshot</h2>
					<CodeSnippet
						theme={theme}
						code={`cd $HOME
rm -rf ~/.celestia-app/data
mkdir -p ~/.celestia-app/data
SNAP_NAME=$(curl -s https://snaps.qubelabs.io/celestia/ | \
egrep -o ">mamaki.*tar" | tr -d ">")
wget -O - https://snaps.qubelabs.io/celestia/\${SNAP_NAME} | tar xf - \
-C ~/.celestia-app/data/`}
					/>
					<h2 id='sync'>State Sync</h2>
					<p>Sorry, not supported yet ¯\_(ツ)_/¯</p>
				</main>
			</div>
		</>
	)
}
export default celestia
