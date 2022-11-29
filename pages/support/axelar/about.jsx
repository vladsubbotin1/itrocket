import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../../../styles/Support.module.scss'
import { Menu, Space, Tooltip, Button, Typography } from 'antd'
import Link from 'next/link.js'
import Footer from '../../../comps/Footer'
import Header from '../../../comps/Header'
import Image from 'next/image'
import { CopyOutlined } from '@ant-design/icons'

const { Title, Text, Paragraph } = Typography

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
		getItem(<Link href='/support/axelar/about'>About</Link>, 'axelar/about'),
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

const about = () => {
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
				<main className={styles.MainColumn}>
					<Space direction='vertical'>
						<Title>Axelar</Title>
						<div className='center-flex'>
							<Image
								style={{ marginBottom: '10px' }}
								src={'/testnet/axelar.jpg'}
								width='100'
								height='100'
							/>
							<Text
								style={{
									width: '80%',
									textAlign: 'center',
									fontSize: '16px',
								}}
							>
								Axelar delivers secure cross-chain communication for Web3. Its
								infrastructure enables dApp users to interact with any asset or
								application, on any chain, with one click.
							</Text>
						</div>

						<br />
						<Title level={2}>Public API:</Title>
						<Space.Compact block>
							<Paragraph
								copyable={{
									text: 'http://142.132.253.112:51317/',
								}}
							>
								<Text code>
									{' '}
									"9de92b545638f6baaa7d6d5109a1f7148f093db3@65.108.77.106:26656,4fd5e497563b2e09cfe6f857fb35bdae76c12582@65.108.206.56:26656,fe32c17373fbaa36d9fd86bc1146bfa125bb4f58@5.9.147.185:26656,220fb60b083bc4d443ce2a7a5363f4813dd4aef4@116.202.236.115:26656,225ad85c594d03942a026b90f4dab43f90230ea0@88.99.3.158:26656,2a2932e780a681ddf980594f7eacf5a33081edaf@192.168.147.43:26656,333de3fc2eba7eead24e0c5f53d665662b2ba001@10.132.0.11:26656,4a38efbae54fd1357329bd583186a68ccd6d85f9@94.130.212.252:26656,52450b21f346a4cf76334374c9d8012b2867b842@167.172.246.201:26656,56d05d4ae0e1440ad7c68e52cc841c424d59badd@192.168.1.46:26656,6a675d4f66bfe049321c3861bcfd19bd09fefbde@195.3.223.204:26656,1069820cdd9f5332503166b60dc686703b2dccc5@138.201.141.76:26656,277ff448eec6ec7fa665f68bdb1c9cb1a52ff597@159.69.110.238:26656,3335c9458105cf65546db0fb51b66f751eeb4906@5.189.129.30:26656,bfb56f4cb8361c49a2ac107251f92c0ea5a1c251@192.168.1.177:26656,edc9aa0bbf1fcd7433fcc3650e3f50ab0becc0b5@65.21.170.3:26656,d582bcd8a8f0a20c551098571727726bc75bae74@213.239.217.52:26656,eb182533a12d75fbae1ec32ef1f8fc6b6dd06601@65.109.28.219:26656,b22f0708c6f393bf79acc0a6ca23643fe7d58391@65.21.91.50:26656,e8f6d75ab37bf4f08c018f306416df1e138fd21c@95.217.135.41:26656,ed83872f2781b2bdb282fc2fd790527bcb6ffe9f@192.168.3.17:26656"
								</Text>
							</Paragraph>
						</Space.Compact>
					</Space>
				</main>
			</div>

			<Footer />
		</>
	)
}
export default about
