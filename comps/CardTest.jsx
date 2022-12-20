import Image from 'next/image'
import styles from '../styles/CardTest.module.scss'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ThemeContext } from '../pages/_app'
import { useContext } from 'react'

const Card = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)

	let data = [
		{
			id: 1,
			name: 'Axelar',
			link: 'https://testnet.axelarscan.io/',
			imgUrl: 'axelar.jpg',
		},
		// {
		// 	id: 2,
		// 	name: 'Bifrost',
		// 	link: 'https://thebifrost.io/',
		// 	imgUrl: 'bifrost.png',
		// },
		{
			id: 3,
			name: 'BlastAPI',
			link: 'https://houston.blastapi.io/',
			imgUrl: 'blastapi.jpg',
		},
		{
			id: 4,
			name: 'Bundlr',
			link: 'https://bundlr.network/explorer',
			imgUrl: 'bundlr.jpg',
		},
		{
			id: 5,
			name: 'Celestia',
			link: 'https://celestia.explorers.guru/validators',
			imgUrl: 'celestia.png',
		},
		// {
		// 	id: 6,
		// 	name: 'DeWeb',
		// 	link: 'https://deweb.services/',
		// 	imgUrl: 'deweb.png',
		// },
		// {
		// 	id: 7,
		// 	name: 'Empower',
		// 	link: 'https://www.empowerchain.io/',
		// 	imgUrl: 'empower.png',
		// },
		{
			id: 8,
			name: 'Gear',
			link: 'https://telemetry.gear-tech.io/',
			imgUrl: 'gear.jpg',
		},
		// {
		// 	id: 9,
		// 	name: 'IronFish',
		// 	link: 'https://ironfish.network/',
		// 	imgUrl: 'ironfish.png',
		// },
		{
			id: 10,
			name: 'Kira',
			link: 'https://kirastats.dragonstake.io/',
			imgUrl: 'kira.svg',
		},
		{
			id: 11,
			name: 'Masa',
			link: 'https://www.masa.finance/',
			imgUrl: 'masa.svg',
		},
		{
			id: 12,
			name: 'Massa',
			link: 'https://massa.net/testnet/',
			imgUrl: 'massa.jpg',
		},
		{
			id: 13,
			name: 'Nois',
			link: 'https://explorer.kjnodes.com/nois',
			imgUrl: 'nois.png',
		},
		{
			id: 14,
			name: 'Nibiru',
			link: 'https://nibiru.explorers.guru/validators',
			imgUrl: 'nibiru.jpg',
		},
		{
			id: 15,
			name: 'Oasys',
			link: 'https://explorer.oasys.games/',
			imgUrl: 'oasys.webp',
		},
		{
			id: 16,
			name: 'Penumbra',
			link: 'https://guide.penumbra.zone/main/pd/join-testnet.html',
			imgUrl: 'penumbra.webp',
		},
		{
			id: 17,
			name: 'Sei',
			link: 'https://sei.explorers.guru/',
			imgUrl: 'sei.svg',
		},
		{
			id: 18,
			name: 'Sui',
			link: 'https://explorer.sui.io/',
			imgUrl: 'sui.svg',
		},
		// {
		// 	id: 19,
		// 	name: 'Subspace',
		// 	link: 'https://subspace.network/',
		// 	imgUrl: 'subspace.jpg',
		// },
		{
			id: 20,
			name: 'Starknet',
			link: 'https://starkscan.co/',
			imgUrl: 'starknet.png',
		},
		{
			id: 21,
			name: 'Terp',
			link: 'https://explorer.bccnodes.com/terp',
			imgUrl: 'terp.svg',
		},
		{
			id: 22,
			name: 'Uptick',
			link: 'https://uptick.explorers.guru/validators',
			imgUrl: 'uptick.jpg',
		},
		{
			id: 23,
			name: 'HAQQ',
			link: 'https://testnet.manticore.team/haqq/staking',
			imgUrl: 'haqq.png',
		},
		// {
		// 	id: 24,
		// 	name: 'OKP4',
		// 	link: 'https://okp4.network/',
		// 	imgUrl: 'okp4.jpg',
		// },
	]

	const container = {
		visible: {
			transition: { staggerChildren: 0.1, delayChildren: 0.2 },
		},
		initial: {
			transition: { staggerChildren: 0.07, staggerDirection: -1 },
		},
	}

	const items = {
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				y: { stiffness: 1000, velocity: -100 },
			},
		},
		initial: {
			y: 30,
			opacity: 0,
			transition: {
				y: { stiffness: 1000 },
			},
		},
	}

	return (
		<motion.div
			className={styles.card__root}
			variants={container}
			initial={'initial'}
			whileInView={'visible'}
			viewport={{ once: true }}
		>
			{data.map(item => {
				return (
					<motion.div className={styles.card} key={item.id} variants={items}>
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
					</motion.div>
				)
			})}
		</motion.div>
	)
}

export default Card
