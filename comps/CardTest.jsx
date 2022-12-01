import Image from 'next/image'
import styles from '../styles/CardTest.module.scss'
import Link from 'next/link'

const Card = () => {
	let data = [
		{
			id: 1,
			name: 'Axelar',
			link: 'https://axelar.network/',
			imgUrl: 'axelar.jpg',
		},
		{
			id: 2,
			name: 'Bifrost',
			link: 'https://thebifrost.io/',
			imgUrl: 'bifrost.png',
		},
		{
			id: 3,
			name: 'BlastAPI',
			link: 'https://blastapi.io/',
			imgUrl: 'blastapi.jpg',
		},
		{
			id: 4,
			name: 'Bundlr',
			link: 'https://bundlr.network/',
			imgUrl: 'bundlr.jpg',
		},
		{
			id: 5,
			name: 'Celestia',
			link: 'https://celestia.org/',
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
			link: 'https://www.gear-tech.io/',
			imgUrl: 'gear.jpg',
		},
		{
			id: 9,
			name: 'IronFish',
			link: 'https://ironfish.network/',
			imgUrl: 'ironfish.png',
		},
		{
			id: 10,
			name: 'Kira',
			link: 'https://kira.network/',
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
			link: 'https://nois.network/',
			imgUrl: 'nois.png',
		},
		{
			id: 14,
			name: 'Nibiru',
			link: 'https://nibiru.fi/',
			imgUrl: 'nibiru.jpg',
		},
		{
			id: 15,
			name: 'Oasys',
			link: 'https://www.oasys.games/',
			imgUrl: 'oasys.webp',
		},
		{
			id: 16,
			name: 'Penumbra',
			link: 'https://penumbra.zone/',
			imgUrl: 'penumbra.webp',
		},
		{
			id: 17,
			name: 'Sei',
			link: 'https://www.seinetwork.io/',
			imgUrl: 'sei.svg',
		},
		{
			id: 18,
			name: 'Sui',
			link: 'https://sui.io/',
			imgUrl: 'sui.svg',
		},
		{
			id: 19,
			name: 'Subspace',
			link: 'https://subspace.network/',
			imgUrl: 'subspace.jpg',
		},
		{
			id: 20,
			name: 'Starknet',
			link: 'https://starknet.io/',
			imgUrl: 'starknet.png',
		},
		{
			id: 21,
			name: 'Terp',
			link: 'https://terp.network/',
			imgUrl: 'terp.svg',
		},
		{
			id: 22,
			name: 'Uptick',
			link: 'https://www.uptick.network/',
			imgUrl: 'uptick.jpg',
		},
		{
			id: 23,
			name: 'HAQQ',
			link: 'https://islamiccoin.net/',
			imgUrl: 'haqq.png',
		},
		// {
		// 	id: 24,
		// 	name: 'OKP4',
		// 	link: 'https://okp4.network/',
		// 	imgUrl: 'okp4.jpg',
		// },
	]

	return (
		<div className={styles.card__root}>
			{data.map(item => {
				return (
					<div className={styles.card} key={item.id}>
						<h5 className={styles.card__heading}>{item.name}</h5>
						<div className={styles.card__img}>
							<Image
								src={require('../public/testnet/'.concat(item.imgUrl))}
								alt='item'
								layout='responsive'
							/>
						</div>
						{/* <div className={styles.card__text}>
							{item?.address &&  (
								<>
									<h6>Address</h6>
									<span className={styles.card__desc}>{item.address}</span>
								</>
							)}
						</div>
						{item?.link && (
							<>
								<a href={item.link}>{item.link}</a>
							</>
						)} */}

						<div className={styles.button__container}>
							<a href={item.link} target='_blank' rel='noopener noreferrer'>
								<button class={styles.buttonExplore} role='button'>
									<span>Explorer</span>
								</button>
							</a>
							<a href={item.link} target='_blank' rel='noopener noreferrer'>
								<button class={styles.buttonSupport} role='button'>
									<Link href='/support' data={data}>
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
