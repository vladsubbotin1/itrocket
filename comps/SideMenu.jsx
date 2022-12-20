import React, { useContext, useEffect, useState } from 'react'
import styles from '../styles/Support.module.scss'
import { Button, Menu } from 'antd'
import {
	InfoCircleOutlined,
	BookOutlined,
	SettingOutlined,
	ReloadOutlined,
	DatabaseOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
} from '@ant-design/icons'
import Link from 'next/link.js'
import { ThemeContext } from '../pages/_app.jsx'

function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	}
}

const rootSubmenuKeys = []

const SideMenu = () => {
	const [collapsed, setCollapsed] = useState(false)

	useEffect(() => {
		if (window.innerWidth < 768) {
			setCollapsed(true)
		}
	}, [])

	const toggleCollapsed = () => {
		setCollapsed(!collapsed)
	}

	const { theme, toggleTheme } = useContext(ThemeContext)

	const [openKeys, setOpenKeys] = useState(['sub1'])
	const onOpenChange = keys => {
		const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
		if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			setOpenKeys(keys)
		} else {
			setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
		}
	}

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
			name: 'Nolus',
			link: 'https://explorer-rila.nolus.io/nolus-rila/staking',
			imgUrl: 'nolus.svg',
		},
		{
			name: 'Nois',
			link: 'https://explorer.kjnodes.com/nois',
			imgUrl: 'nois.png',
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
		{
			name: 'HAQQ',
			link: 'https://testnet.manticore.team/haqq/staking',
			imgUrl: 'haqq.png',
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
			getItem(`${name}`, `sub${id}`, null, [
				getItem(
					<Link href={'/support/mainnet/' + name.toLowerCase()}>About</Link>,
					`${name}/about`,
					<InfoCircleOutlined />
				),
				getItem(
					<Link href={'/support/mainnet/' + name.toLowerCase() + '#guide'}>
						Guide
					</Link>,
					`${name}/guide`,
					<BookOutlined />
				),
				getItem(
					<Link href={'/support/mainnet/' + name.toLowerCase() + '#rpc'}>
						RPC, API, gRPC
					</Link>,
					`${name}/rpc`,
					<SettingOutlined />
				),
				getItem(
					<Link href={'/support/mainnet/' + name.toLowerCase() + '#sync'}>
						Snapshot
					</Link>,
					`${name}/state`,
					<DatabaseOutlined />
				),
				getItem(
					<Link href={'/support/mainnet/' + name.toLowerCase() + '#state'}>
						State sync
					</Link>,
					`${name}/sync`,
					<ReloadOutlined />
				),
			])
		)
	})

	items.push(getItem('Testnets', 'grp2', null, null, 'group'))
	testnetData.map(item => {
		let name = item.name
		let id = 'testnet' + item.name

		items.push(
			getItem(`${name}`, `sub${id}`, null, [
				getItem(
					<Link href={'/support/testnet/' + name.toLowerCase()}>About</Link>,
					`${name}/#about`,
					<InfoCircleOutlined />
				),
				getItem(
					<Link href={'/support/testnet/' + name.toLowerCase() + '#guide'}>
						Guide
					</Link>,
					`${name}/#guide`,
					<BookOutlined />
				),
				getItem(
					<Link href={'/support/testnet/' + name.toLowerCase() + '#rpc'}>
						RPC, API, gRPC
					</Link>,
					`${name}/#rpc`,
					<SettingOutlined />
				),
				getItem(
					<Link href={'/support/testnet/' + name.toLowerCase() + '#snap'}>
						Snapshot
					</Link>,
					`${name}/#state`,
					<DatabaseOutlined />
				),
				getItem(
					<Link href={'/support/testnet/' + name.toLowerCase() + '#sync'}>
						State sync
					</Link>,
					`${name}/sync`,
					<ReloadOutlined />
				),
			])
		)
	})

	return (
		<aside className={styles.SideColumn}>
			<Button
				type='primary'
				onClick={toggleCollapsed}
				style={{
					paddingBottom: 10,
				}}
			>
				{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
			</Button>
			<Menu
				style={{
					width: collapsed ? 0 : 275,
					borderInlineEnd: collapsed ? 'none' : '1px solid rgba(5, 5, 5, 0.06)',
				}}
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				inlineCollapsed={collapsed}
				openKeys={openKeys}
				onOpenChange={onOpenChange}
				mode='inline'
				theme={theme}
				items={items}
			/>
		</aside>
	)
}

export default SideMenu
