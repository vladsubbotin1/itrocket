import React, { useState } from 'react'
import Head from 'next/head'
import Footer from '../comps/Footer'
import Header from '../comps/Header'
import styles from '../styles/Support.module.scss'
import { SettingOutlined } from '@ant-design/icons'
import { Menu, Switch } from 'antd'
import { useRouter } from 'next/router'

function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	}
}

const items = [
	getItem('Axelar', 'sub1', null, [
		getItem('About', 'axelar/about'),
		getItem('Guide', 'axelar/guide'),
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
		getItem('About', 'axelar/about'),
		getItem('Guide', 'axelar/guide'),
		getItem('RPC, API, gRPC', 'axelar/rpc'),
		getItem('State sync, Snap', 'axelar/state'),
	]),
	getItem('Bundlr', 'sub4', null, [
		getItem('About', 'axelar/about'),
		getItem('Guide', 'axelar/guide'),
		getItem('RPC, API, gRPC', 'axelar/rpc'),
		getItem('State sync, Snap', 'axelar/state'),
	]),
	getItem('Celestia', 'sub5', null, [
		getItem('About', 'axelar/about'),
		getItem('Guide', 'axelar/guide'),
		getItem('RPC, API, gRPC', 'axelar/rpc'),
		getItem('State sync, Snap', 'axelar/state'),
	]),
	getItem('DeWeb', 'sub6', null, [
		getItem('About', 'axelar/about'),
		getItem('Guide', 'axelar/guide'),
		getItem('RPC, API, gRPC', 'axelar/rpc'),
		getItem('State sync, Snap', 'axelar/state'),
	]),
	getItem('Empower', 'sub7', null, [
		getItem('About', 'axelar/about'),
		getItem('Guide', 'axelar/guide'),
		getItem('RPC, API, gRPC', 'axelar/rpc'),
		getItem('State sync, Snap', 'axelar/state'),
	]),
	getItem('Gear', 'sub8', null, [
		getItem('About', 'axelar/about'),
		getItem('Guide', 'axelar/guide'),
		getItem('RPC, API, gRPC', 'axelar/rpc'),
		getItem('State sync, Snap', 'axelar/state'),
	]),
	getItem('IronFish', 'sub9', null, [
		getItem('About', 'axelar/about'),
		getItem('Guide', 'axelar/guide'),
		getItem('RPC, API, gRPC', 'axelar/rpc'),
		getItem('State sync, Snap', 'axelar/state'),
	]),
	getItem('Kira', 'sub10', null, [
		getItem('About', 'axelar/about'),
		getItem('Guide', 'axelar/guide'),
		getItem('RPC, API, gRPC', 'axelar/rpc'),
		getItem('State sync, Snap', 'axelar/state'),
	]),
	getItem('Masa', 'sub11', null, [
		getItem('About', 'axelar/about'),
		getItem('Guide', 'axelar/guide'),
		getItem('RPC, API, gRPC', 'axelar/rpc'),
		getItem('State sync, Snap', 'axelar/state'),
	]),
	getItem('Massa', 'sub12', null, [
		getItem('About', 'axelar/about'),
		getItem('Guide', 'axelar/guide'),
		getItem('RPC, API, gRPC', 'axelar/rpc'),
		getItem('State sync, Snap', 'axelar/state'),
	]),
	getItem('Nois', 'sub13', null, [
		getItem('About', 'axelar/about'),
		getItem('Guide', 'axelar/guide'),
		getItem('RPC, API, gRPC', 'axelar/rpc'),
		getItem('State sync, Snap', 'axelar/state'),
	]),
	getItem('Nibiru', 'sub14', null, [
		getItem('About', 'axelar/about'),
		getItem('Guide', 'axelar/guide'),
		getItem('RPC, API, gRPC', 'axelar/rpc'),
		getItem('State sync, Snap', 'axelar/state'),
	]),
	getItem('Oasys', 'sub15', null, [
		getItem('About', 'axelar/about'),
		getItem('Guide', 'axelar/guide'),
		getItem('RPC, API, gRPC', 'axelar/rpc'),
		getItem('State sync, Snap', 'axelar/state'),
	]),
	getItem('Penumbra', 'sub16', null, [
		getItem('About', 'axelar/about'),
		getItem('Guide', 'axelar/guide'),
		getItem('RPC, API, gRPC', 'axelar/rpc'),
		getItem('State sync, Snap', 'axelar/state'),
	]),
	getItem('Sei', 'sub17', null, [
		getItem('About', 'axelar/about'),
		getItem('Guide', 'axelar/guide'),
		getItem('RPC, API, gRPC', 'axelar/rpc'),
		getItem('State sync, Snap', 'axelar/state'),
	]),
	getItem('Sui', 'sub18', null, [
		getItem('About', 'axelar/about'),
		getItem('Guide', 'axelar/guide'),
		getItem('RPC, API, gRPC', 'axelar/rpc'),
		getItem('State sync, Snap', 'axelar/state'),
	]),
	getItem('Subspace', 'sub18', null, [
		getItem('About', 'axelar/about'),
		getItem('Guide', 'axelar/guide'),
		getItem('RPC, API, gRPC', 'axelar/rpc'),
		getItem('State sync, Snap', 'axelar/state'),
	]),
	getItem('Starknet', 'sub18', null, [
		getItem('About', 'axelar/about'),
		getItem('Guide', 'axelar/guide'),
		getItem('RPC, API, gRPC', 'axelar/rpc'),
		getItem('State sync, Snap', 'axelar/state'),
	]),
]

const Support = () => {
	const [theme, setTheme] = useState('light')
	const [current, setCurrent] = useState('1')

	const router = useRouter()

	const changeTheme = value => {
		setTheme(value ? 'dark' : 'light')
	}
	const onClick = e => {
		const key = e.key
		let path = `support/` + key
		console.log(path)
		router.push(path)
	}

	return (
		<>
			<Head>
				<title>ITRocket - Support Provider 🚀</title>
				<meta
					name='description'
					content='ITRocket 🚀|The #1 Crypto Validator in the game'
				/>
				<link rel='icon' href='/whiteLogoCrop.ico' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link
					href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap'
					rel='stylesheet'
				/>
			</Head>

			<Header />

			<div className={styles.container}>
				<aside className={styles.leftColumn}>
					{/* <Switch
						checked={theme === 'dark'}
						onChange={changeTheme}
						checkedChildren='Dark'
						unCheckedChildren='Light'
					/>
					<br /> */}
					<Menu
						theme={theme}
						onClick={onClick}
						style={{
							width: 256,
						}}
						defaultOpenKeys={['sub1']}
						selectedKeys={[current]}
						mode='inline'
						items={items}
					/>
				</aside>
				<main className={styles.rightColumn}></main>
			</div>

			<Footer />
		</>
	)
}
export default Support
