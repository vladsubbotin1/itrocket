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
			id: 1,
			name: 'NYM',
			link: 'https://nymtech.net/',
			imgUrl: 'nym.png',
		},
		{
			id: 2,
			name: 'Forta',
			link: 'https://forta.org/',
			imgUrl: 'forta.jpg',
		},
		{
			id: 3,
			name: 'Quicksilver',
			link: 'https://quicksilver.explorers.guru/',
			imgUrl: 'quicksilver.jpg',
		},
	]

	let testnetData = [
		{
			id: 1,
			name: 'Axelar',
			link: 'https://axelar.network/',
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
		// {
		// 	id: 9,
		// 	name: 'IronFish',
		// 	link: 'https://ironfish.network/',
		// 	imgUrl: 'ironfish.png',
		// },
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
		// {
		// 	id: 19,
		// 	name: 'Subspace',
		// 	link: 'https://subspace.network/',
		// 	imgUrl: 'subspace.jpg',
		// },
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

	const items = []

	items.push(getItem('Mainnets', 'grp1', null, null, 'group'))
	mainnetData.map(item => {
		let name = item.name
		let id = 'mainnet' + item.id

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
		let id = 'testnet' + item.id

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
