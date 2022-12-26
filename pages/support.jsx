import React, { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '@styles/Support.module.scss'
import Header from '@components/Header'
import SideMenu from '@components/SideMenu'
import { ThemeContext } from '../pages/_app.jsx'
import Link from 'next/link'
import 'highlight.js/styles/github.css'

const about = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)
	const [current, setCurrent] = useState('1')

	useEffect(() => {
		let typo = document.getElementsByClassName('ant-typography')

		for (let i = 0; i < typo.length; i++) {
			if (theme === 'light' && typo) typo[i].style.color = '#111'
			else typo[i].style.color = '#fff'
		}
	}, [theme])

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
					<h2>Support 🌟</h2>
					<span>Here is the list of networks supported by ITRocket team:</span>
					<h3>Mainnets</h3>
					<ul>
						<li>
							<Link href='/support/mainnet/nym/'>NYM</Link>
						</li>
						<li>
							<Link href='/support/mainnet/forta/'>Forta</Link>
						</li>
						<li>
							<Link href='/support/mainnet/quicksilver/'>Quicksilver</Link>
						</li>
					</ul>

					<h3>Testnets</h3>
					<div style={{ display: 'flex', flexWrap: 'wrap', gap: '70px' }}>
						<div className='flex-center'>
							<ul>
								<li>
									<Link href='/support/testnet/axelar'>Axelar</Link>
								</li>
								<li>
									<Link href='/support/testnet/blastapi'>Blast API</Link>
								</li>
								<li>
									<Link href='/support/testnet/bundlr'>Bundlr</Link>
								</li>
								<li>
									<Link href='/support/testnet/celestia'>Celestia</Link>
								</li>
								<li>
									<Link href='/support/testnet/gear'>Gear</Link>
								</li>
								<li>
									<Link href='/support/testnet/humans'>Humans</Link>
								</li>
								<li>
									<Link href='/support/testnet/kira'>Kira</Link>
								</li>
								<li>
									<Link href='/support/testnet/masa'>Masa</Link>
								</li>
								<li>
									<Link href='/support/testnet/massa'>Massa</Link>
								</li>
								<li>
									<Link href='/support/testnet/nois'>Nois</Link>
								</li>
							</ul>
						</div>
						<div className='flex-center'>
							<ul>
								<li>
									<Link href='/support/testnet/nibiru'>Nibiru</Link>
								</li>
								<li>
									<Link href='/support/testnet/nolus'>Nolus</Link>
								</li>
								<li>
									<Link href='/support/testnet/oasys'>Oasys</Link>
								</li>
								<li>
									<Link href='/support/testnet/penumbra'>Penumbra</Link>
								</li>
								<li>
									<Link href='/support/testnet/sei'>Sei</Link>
								</li>
								<li>
									<Link href='/support/testnet/sui'>Sui</Link>
								</li>
								<li>
									<Link href='/support/testnet/starknet'>Starknet</Link>
								</li>
								<li>
									<Link href='/support/testnet/terp'>Terp</Link>
								</li>
								<li>
									<Link href='/support/testnet/uptick'>Uptick</Link>
								</li>
								<li>
									<Link href='/support/testnet/haqq'>HAQQ </Link>
								</li>
							</ul>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}
export default about
