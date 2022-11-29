import React, { useState } from 'react'
import Head from 'next/head'
import Footer from '../comps/Footer.jsx'
import Header from '../comps/Header.jsx'
import styles from '../styles/Support.module.scss'
import { Menu, Tour } from 'antd'
import Link from 'next/link.js'

function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	}
}

const rootSubmenuKeys = [
	'sub1',
	'sub2',
	'sub3',
	'sub4',
	'sub5',
	'sub6',
	'sub7',
	'sub8',
	'sub9',
	'sub10',
	'sub11',
	'sub12',
	'sub13',
	'sub14',
	'sub15',
	'sub16',
	'sub17',
	'sub18',
	'sub19',
	'sub20',
	'sub21',
	'sub22',
	'sub23',
	'sub24',
]
const Support = () => {
	const [current, setCurrent] = useState('1')

	const onClick = e => {
		console.log('click ', e)
		setCurrent(e.key)
	}

	const [openKeys, setOpenKeys] = useState(['sub1'])
	const onOpenChange = keys => {
		const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
		if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			setOpenKeys(keys)
		} else {
			setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
		}
	}

	const [open, setOpen] = useState(false)

	const items = [
		getItem('Axelar', 'sub1', null, [
			getItem(<Link href='/support/axelar/about'>About</Link>, 'axelar/about'),
			getItem(<Link href='/support/axelar/about'>Guide</Link>, 'axelar/guide'),
			getItem('RPC, API, gRPC', 'axelar/rpc'),
			getItem('State sync, Snap', 'axelar/state'),
		]),
		getItem('Bifrost', 'sub2', null, [
			getItem('About', 'bifrost/about'),
			getItem('Guide', 'bifrost/guide'),
			getItem('RPC, API, gRPC', 'bifrost/rpc'),
			getItem('State sync, Snap', 'bifrost/state'),
		]),
		getItem('BlastAPI', 'sub3', null, [
			getItem('About', 'blastapi/about'),
			getItem('Guide', 'blastapi/guide'),
			getItem('RPC, API, gRPC', 'blastapi/rpc'),
			getItem('State sync, Snap', 'blastapi/state'),
		]),
		getItem('Bundlr', 'sub4', null, [
			getItem('About', 'bundlr/about'),
			getItem('Guide', 'bundlr/guide'),
			getItem('RPC, API, gRPC', 'bundlr/rpc'),
			getItem('State sync, Snap', 'bundlr/state'),
		]),
		getItem('Celestia', 'sub5', null, [
			getItem('About', 'celestia/about'),
			getItem('Guide', 'celestia/guide'),
			getItem('RPC, API, gRPC', 'celestia/rpc'),
			getItem('State sync, Snap', 'celestia/state'),
		]),
		getItem('DeWeb', 'sub6', null, [
			getItem('About', 'deweb/about'),
			getItem('Guide', 'deweb/guide'),
			getItem('RPC, API, gRPC', 'deweb/rpc'),
			getItem('State sync, Snap', 'deweb/state'),
		]),
		getItem('Empower', 'sub7', null, [
			getItem('About', 'empower/about'),
			getItem('Guide', 'empower/guide'),
			getItem('RPC, API, gRPC', 'empower/rpc'),
			getItem('State sync, Snap', 'empower/state'),
		]),
		getItem('Gear', 'sub8', null, [
			getItem('About', 'gear/about'),
			getItem('Guide', 'gear/guide'),
			getItem('RPC, API, gRPC', 'gear/rpc'),
			getItem('State sync, Snap', 'gear/state'),
		]),
		getItem('IronFish', 'sub9', null, [
			getItem('About', 'ironfish/about'),
			getItem('Guide', 'ironfish/guide'),
			getItem('RPC, API, gRPC', 'ironfish/rpc'),
			getItem('State sync, Snap', 'ironfish/state'),
		]),
		getItem('Kira', 'sub10', null, [
			getItem('About', 'kira/about'),
			getItem('Guide', 'kira/guide'),
			getItem('RPC, API, gRPC', 'kira/rpc'),
			getItem('State sync, Snap', 'kira/state'),
		]),
		getItem('Masa', 'sub11', null, [
			getItem('About', 'masa/about'),
			getItem('Guide', 'masa/guide'),
			getItem('RPC, API, gRPC', 'masa/rpc'),
			getItem('State sync, Snap', 'masa/state'),
		]),
		getItem('Massa', 'sub12', null, [
			getItem('About', 'massa/about'),
			getItem('Guide', 'massa/guide'),
			getItem('RPC, API, gRPC', 'massa/rpc'),
			getItem('State sync, Snap', 'massa/state'),
		]),
		getItem('Nois', 'sub13', null, [
			getItem('About', 'nois/about'),
			getItem('Guide', 'nois/guide'),
			getItem('RPC, API, gRPC', 'nois/rpc'),
			getItem('State sync, Snap', 'nois/state'),
		]),
		getItem('Nibiru', 'sub14', null, [
			getItem('About', 'nibiru/about'),
			getItem('Guide', 'nibiru/guide'),
			getItem('RPC, API, gRPC', 'nibiru/rpc'),
			getItem('State sync, Snap', 'nibiru/state'),
		]),
		getItem('Oasys', 'sub15', null, [
			getItem('About', 'oasys/about'),
			getItem('Guide', 'oasys/guide'),
			getItem('RPC, API, gRPC', 'oasys/rpc'),
			getItem('State sync, Snap', 'oasys/state'),
		]),
		getItem('Penumbra', 'sub16', null, [
			getItem('About', 'penumbra/about'),
			getItem('Guide', 'penumbra/guide'),
			getItem('RPC, API, gRPC', 'penumbra/rpc'),
			getItem('State sync, Snap', 'penumbra/state'),
		]),
		getItem('Sei', 'sub17', null, [
			getItem('About', 'sei/about'),
			getItem('Guide', 'sei/guide'),
			getItem('RPC, API, gRPC', 'sei/rpc'),
			getItem('State sync, Snap', 'sei/state'),
		]),
		getItem('Sui', 'sub18', null, [
			getItem('About', 'sui/about'),
			getItem('Guide', 'sui/guide'),
			getItem('RPC, API, gRPC', 'sui/rpc'),
			getItem('State sync, Snap', 'sui/state'),
		]),
		getItem('Subspace', 'sub19', null, [
			getItem('About', 'subspace/about'),
			getItem('Guide', 'subspace/guide'),
			getItem('RPC, API, gRPC', 'subspace/rpc'),
			getItem('State sync, Snap', 'subspace/state'),
		]),
		getItem('Starknet', 'sub20', null, [
			getItem('About', 'starknet/about'),
			getItem('Guide', 'starknet/guide'),
			getItem('RPC, API, gRPC', 'starknet/rpc'),
			getItem('State sync, Snap', 'starknet/state'),
		]),
		getItem('Terp', 'sub21', null, [
			getItem('About', 'terp/about'),
			getItem('Guide', 'terp/guide'),
			getItem('RPC, API, gRPC', 'terp/rpc'),
			getItem('State sync, Snap', 'terp/state'),
		]),
		getItem('Uptick', 'sub22', null, [
			getItem('About', 'uptick/about'),
			getItem('Guide', 'uptick/guide'),
			getItem('RPC, API, gRPC', 'uptick/rpc'),
			getItem('State sync, Snap', 'uptick/state'),
		]),
		getItem('HAQQ', 'sub23', null, [
			getItem('About', 'haqq/about'),
			getItem('Guide', 'haqq/guide'),
			getItem('RPC, API, gRPC', 'haqq/rpc'),
			getItem('State sync, Snap', 'haqq/state'),
		]),
		getItem('OKP4', 'sub24', null, [
			getItem('About', <Link href='okp4/about'></Link>),
			getItem('Guide', 'okp4/guide'),
			getItem('RPC, API, gRPC', 'okp4/rpc'),
			getItem('State sync, Snap', 'okp4/state'),
		]),
	]

	return (
		<>
			<Head>
				<title>ITRocket - Support Provider 🚀</title>
				<meta
					name='description'
					content='ITRocket 🚀|The #1 Crypto Validator in the game'
				/>
			</Head>

			<Header />

			<div className={styles.container}>
				<aside className={styles.SideColumn}>
					<Menu
						onClick={onClick}
						style={{
							width: 280,
						}}
						openKeys={openKeys}
						onOpenChange={onOpenChange}
						mode='inline'
						items={items}
					/>
				</aside>
				<main className={styles.MainColumn}></main>
			</div>

			<Footer />
		</>
	)
}
export default Support
