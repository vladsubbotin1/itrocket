import Image from 'next/image'
import styles from '@styles/CardTest.module.scss'
import Link from 'next/link'
import { ThemeContext } from '../pages/_app'
import { useContext } from 'react'

const Card = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)

	let data = [
		{
			name: 'Axelar',
			link: 'https://testnet.axelarscan.io/',
			imgUrl: 'axelar.jpg',
		},
		// {
		// 	name: 'Bifrost',
		// 	link: 'https://thebifrost.io/',
		// 	imgUrl: 'bifrost.png',
		// },
		{
			name: 'BlastAPI',
			link: 'https://houston.blastapi.io/',
			imgUrl: 'blastapi.jpg',
		},
		{
			name: 'Bundlr',
			link: 'https://bundlr.network/explorer',
			imgUrl: 'bundlr.jpg',
		},
		{
			name: 'Celestia',
			link: 'https://testnet.itrocket.net/celestia',
			imgUrl: 'celestia.png',
		},
		// {
		// 	name: 'DeWeb',
		// 	link: 'https://deweb.services/',
		// 	imgUrl: 'deweb.png',
		// },
		{
			name: 'Defund',
			link: 'https://defund.explorers.guru/validators',
			imgUrl: 'defund.png',
		},
		// {
		// 	name: 'Empower',
		// 	link: 'https://www.empowerchain.io/',
		// 	imgUrl: 'empower.png',
		// },
		{
			name: 'Gear',
			link: 'https://telemetry.gear-tech.io/#list/0x209bc5d3262cad676cd1fcd87a958a3d00c0176f8720231cbbb54a10f735d9bb',
			imgUrl: 'gear.jpg',
		},
		{
			name: 'HAQQ',
			link: 'https://testnet.itrocket.net/haqq',
			imgUrl: 'haqq.png',
		},
		{
			name: 'Humans',
			link: 'https://explorer.humans.zone/humans-testnet',
			imgUrl: 'humans.jpg',
		},
		// {
		// 	name: 'IronFish',
		// 	link: 'https://ironfish.network/',
		// 	imgUrl: 'ironfish.png',
		// },
		{
			name: 'Kira',
			link: 'https://kirastats.dragonstake.io/',
			imgUrl: 'kira.svg',
		},
		{
			name: 'Lava',
			link: 'https://testnet.itrocket.net/lava/staking',
			imgUrl: 'lava.svg',
		},
		{
			name: 'Masa',
			link: 'https://www.masa.finance/',
			imgUrl: 'masa.svg',
		},
		{
			name: 'Massa',
			link: 'https://massa.net/testnet/',
			imgUrl: 'massa.jpg',
		},
		{
			name: 'Nois',
			link: 'https://testnet.itrocket.net/nois',
			imgUrl: 'nois.png',
		},
		{
			name: 'Nolus',
			link: 'https://explorer-rila.nolus.io/nolus-rila/staking',
			imgUrl: 'nolus.svg',
		},

		{
			name: 'Nibiru',
			link: 'https://nibiru.explorers.guru/validators',
			imgUrl: 'nibiru.jpg',
		},
		{
			name: 'Oasys',
			link: 'https://explorer.oasys.games/',
			imgUrl: 'oasys.webp',
		},
		{
			name: 'Penumbra',
			link: 'https://guide.penumbra.zone/main/pd/join-testnet.html',
			imgUrl: 'penumbra.webp',
		},
		{
			name: 'Sei',
			link: 'https://testnet.itrocket.net/sei',
			imgUrl: 'sei.svg',
		},
		{
			name: 'Sui',
			link: 'https://explorer.sui.io/',
			imgUrl: 'sui.svg',
		},
		// {
		// 	name: 'Subspace',
		// 	link: 'https://subspace.network/',
		// 	imgUrl: 'subspace.jpg',
		// },
		{
			name: 'Starknet',
			link: 'https://starkscan.co/',
			imgUrl: 'starknet.png',
		},
		{
			name: 'Terp',
			link: 'https://explorer.bccnodes.com/terp',
			imgUrl: 'terp.svg',
		},
		{
			name: 'Uptick',
			link: 'https://uptick.explorers.guru/validators',
			imgUrl: 'uptick.jpg',
		},

		// {
		// 	name: 'OKP4',
		// 	link: 'https://okp4.network/',
		// 	imgUrl: 'okp4.jpg',
		// },
	]

	return (
		<div className={styles.card__root}>
			{data.map(item => {
				return (
					<div className={styles.card} key={item.name}>
						<h5 className={styles.card__heading}>{item.name}</h5>
						<div className={styles.card__img}>
							<Image
								src={require('../public/testnet/'.concat(item.imgUrl))}
								alt='item'
								layout='responsive'
							/>
						</div>

						<div className={styles.button__container}>
							<a href={item.link} target='_blank' rel='noopener noreferrer'>
								<button
									className={
										theme === 'light'
											? styles.buttonExplore
											: styles.buttonExplore_dark
									}
									role='button'
								>
									<span>Explorer</span>
								</button>
							</a>
							<a href={item.link} target='_blank' rel='noopener noreferrer'>
								<button
									className={
										theme === 'light'
											? styles.buttonSupport
											: styles.buttonSupport_dark
									}
									role='button'
								>
									<Link
										href={'/support/testnet/' + item.name.toLowerCase()}
										data={data}
									>
										Support
									</Link>
								</button>
							</a>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Card
