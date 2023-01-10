import { useContext, useState } from 'react'
import styles from '@styles/Support.module.scss'
import { Menu } from 'antd'
import Link from 'next/link.js'
import { ThemeContext } from '../pages/_app.jsx'
import Image from 'next/image.js'

function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	}
}

const SideMenu = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)

	// const [openKeys, setOpenKeys] = useState(['sub1'])
	// const onOpenChange = keys => {
	// 	const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
	// 	if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
	// 		setOpenKeys(keys)
	// 	} else {
	// 		setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
	// 	}
	// }

	let mainnetData = [
		{
			name: 'NYM',
			link: 'https://nymtech.net/',
			imgUrl: 'nym.png',
		},
		{
			name: 'Forta',
			link: 'https://forta.org/',
			imgUrl: 'forta.jpg',
		},
		{
			name: 'Quicksilver',
			link: 'https://quicksilver.explorers.guru/',
			imgUrl: 'quicksilver.jpg',
		},
	]

	let testnetData = [
		{
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
			link: 'https://celestia.explorers.guru/validators',
			imgUrl: 'celestia.png',
		},
		// {
		// 	name: 'DeWeb',
		// 	link: 'https://deweb.services/',
		// 	imgUrl: 'deweb.png',
		// },
		// {
		{
			name: 'Defund',
			link: 'https://defund.explorers.guru/validators',
			imgUrl: 'defund.png',
		},
		// 	name: 'Empower',
		// 	link: 'https://www.empowerchain.io/',
		// 	imgUrl: 'empower.png',
		// },
		{
			name: 'Gear',
			link: 'https://telemetry.gear-tech.io/',
			imgUrl: 'gear.jpg',
		},
		{
			name: 'HAQQ',
			link: 'https://testnet.manticore.team/haqq/staking',
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
			link: 'https://explorer.kjnodes.com/nois',
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
			link: 'https://sei.explorers.guru/',
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

	const items = []

	items.push(getItem('Mainnets', 'grp1', null, null, 'group'))
	mainnetData.map(item => {
		let name = item.name
		let id = 'mainnet' + item.name

		items.push(
			getItem(
				<Link href={'/support/mainnet/' + name.toLowerCase()}>
					{item.name}
				</Link>,
				`sub${id}`,
				<Image
					src={require('../public/mainnet/'.concat(item.imgUrl))}
					alt='project logo'
					width='20'
					height='20'
					loading='eager'
					unoptimized={true}
					layout='intrinsic'
				/>
			)
		)
	})

	items.push(getItem('Testnets', 'grp2', null, null, 'group'))
	testnetData.map(item => {
		let name = item.name
		let id = 'testnet' + item.name

		items.push(
			getItem(
				<Link href={'/support/testnet/' + name.toLowerCase()}>
					{item.name}
				</Link>,
				`sub${id}`,
				<Image
					src={require('/public/testnet/'.concat(item.imgUrl))}
					alt='project logo'
					width='20'
					height='20'
					loading='eager'
					unoptimized={true}
					layout='intrinsic'
				/>
			)
		)
	})

	return (
		<aside className={styles.SideColumn}>
			<Menu
				items={items}
				style={{
					width: 205,
					borderInlineEnd: '1px solid rgba(130, 130, 130, 0.1)',
				}}
				mode='vertical'
				theme={theme}
			/>
		</aside>
	)
}

export default SideMenu
