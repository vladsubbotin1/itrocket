import Image from 'next/image'
import styles from '../styles/CardMain.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useState } from 'react'
import Modal from './Modal'
import { ThemeContext } from '../pages/_app'
import Link from 'next/link'
import { Typography } from 'antd'

const { Text } = Typography

const Card = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)

	const [modalOpen, setModalOpen] = useState(false)
	const close = () => setModalOpen(false)
	const open = () => setModalOpen(true)

	let data = [
		{
			name: 'NYM',
			link: 'https://mixnet.explorers.guru/',
			imgUrl: 'nym.png',
		},
		{
			name: 'Forta',
			link: 'https://explorer.forta.network/',
			imgUrl: 'forta.jpg',
		},
		{
			name: 'Quicksilver',
			link: 'https://explorer.nodestake.top/quicksilver/staking',
			imgUrl: 'quicksilver.jpg',
		},
	]

	const NYMDesc = (
		<>
			<b>ITRocket team invites you to delegate to our nodes! </b>
			<br />
			<br /> <b>Only 3% fees</b> - guaranteed to never go up <br /> <br />
			We offer you: <br />
			🚀 High quality hardware <br />
			🚀 Only one node on the server <br />
			🚀 24/7 node monitoring <br />
			🚀 Tech support for delegators
			<br />
			<br /> If you have any questions, feel free to contact us on{' '}
			<a href='https://t.me/SEM3gs' style={{ color: '#44b5dd' }}>
				Telegram!
			</a>
			<br />
			<br />
			<div className={styles.delegeteWrapper}>
				<div>
					<b>USA Mix node Identity Key: </b>
					6L1geN6S9n7SMvgajjptj6p96sCSMfxWmbR8dJ3G3f5
					<br />
					<div className='center-flex'>
						<button className={styles.btnDelegate_blue}>
							<a
								href='https://mixnet.explorers.guru/mixnode/6L1geN6S9n7SMvgajjptj6p96sCSMfxWmbR8dJ3G3f5'
								rel='noopener noreferrer'
								target='_blank'
							>
								Delegate
							</a>
						</button>
					</div>
				</div>
				<br />
				<div>
					<b>Canada Mix node Identity Key: </b>{' '}
					46E69fLa7dD6VdrN4dGrYhfoJ3dJA7auouxeZCRJKAtL
					<br />
					<div className='center-flex'>
						<button className={styles.btnDelegate}>
							<a
								href='https://mixnet.explorers.guru/mixnode/46E69fLa7dD6VdrN4dGrYhfoJ3dJA7auouxeZCRJKAtL'
								rel='noopener noreferrer'
								target='_blank'
							>
								Delegate
							</a>
						</button>
					</div>
				</div>
			</div>
		</>
	)

	const FortaDesc = (
		<>
			<b>ITRocket team invites you to delegate to our node. Welcome aboard!</b>
			<br />
			<br />
			We offer you: <br />
			🚀 High quality hardware <br />
			🚀 Only one node on the server <br />
			🚀 24/7 node monitoring <br />
			🚀 Tech support for delegators
			<br />
			<br /> If you have any questions, feel free to contact us on{' '}
			<a href='https://t.me/SEM3gs' style={{ color: '#44b5dd' }}>
				Telegram!
			</a>
			<br /> <br />
			<div className={styles.delegateWrapper}>
				<div>
					<b>Forta Ethereum scan node: </b>
					<div className='center-flex'>
						<button className={styles.btnDelegate_blue}>
							<a
								href='https://explorer.forta.network/scan-node/0x7c224eB61cF0Dd6aD66F04fb7211dc842EA130e3'
								rel='noopener noreferrer'
								target='_blank'
							>
								Delegate
							</a>
						</button>
					</div>
				</div>
				<div className={styles.delegateColumn}>
					<b>Forta Optymism scan node: </b>
					<div className='center-flex'>
						<button className={styles.btnDelegate}>
							<a
								href='https://explorer.forta.network/scan-node/0x716dBd07d5613b96617a2454231f408A8598D8CE'
								rel='noopener noreferrer'
								target='_blank'
							>
								Delegate
							</a>
						</button>
					</div>
				</div>
			</div>
		</>
	)

	const QuicksilverDesc = (
		<>
			<b>
				ITRocket team invites you to delegate to to our Quicksilver validator!
			</b>
			<br />
			<br /> <b>Only 3% fees</b> - guaranteed to never go up <br />
			<br />
			We offer you: <br />
			🚀 High quality hardware <br />
			🚀 Only one node on the server <br />
			🚀 24/7 node monitoring <br />
			🚀 Tech support for delegators
			<br />
			<br />
			<span>
				You can stake your own tokens and locked tokens. If you have any
				questions, feel free to contact us on{' '}
			</span>
			<a href='https://t.me/SEM3gs' style={{ color: '#44b5dd' }}>
				Telegram!
			</a>
			<br /> <br />
			<div>
				<b>Validator address: </b> <br />
				quickvaloper1jlh8cttv96kyxu0j0r2ppv4sga6ju4uzxa3c2x
			</div>
			<br />
			<b>Link to the explorer: </b> <br />
			<a
				href='https://explorer.nodestake.top/quicksilver/staking/quickvaloper1jlh8cttv96kyxu0j0r2ppv4sga6ju4uzxa3c2x'
				rel='noopener noreferrer'
				target='_blank'
			>
				https://explorer.nodestake.top/quicksilver/staking/quickvaloper1jlh8cttv96kyxu0j0r2ppv4sga6ju4uzxa3c2x
			</a>
			<br /> <br />
			<div className='center-flex'>
				<button className={styles.btnDelegate}>
					<Link href='/delegate/quicksilver'>Delegate</Link>
				</button>
			</div>
		</>
	)

	const [modalDesc, setModalDesc] = useState(false)
	let toggleModalDesc = name => {
		if (name === 'NYM') setModalDesc(NYMDesc)
		else if (name === 'Forta') setModalDesc(FortaDesc)
		else setModalDesc(QuicksilverDesc)
	}

	return (
		<div className={styles.card__root}>
			{data.map(item => {
				return (
					<div className={styles.card} key={item.name}>
						<h5 className={styles.card__heading}>{item.name}</h5>
						<div className={styles.card__img}>
							<Image
								src={require('../public/mainnet/'.concat(item.imgUrl))}
								alt='item'
								layout='responsive'
								width='100'
								height='100'
								sizes='(max-width: 768px) 80vw,
              (max-width: 1200px) 20vw'
							/>
						</div>
						<div className={styles.button__wrapper}>
							<motion.button
								whileTap={{ scale: 0.95 }}
								className={
									theme === 'light'
										? styles.buttonDelegate
										: styles.buttonDelegate_dark
								}
								role='button'
								onClick={() => {
									modalOpen ? close() : open()
									toggleModalDesc(item.name)
								}}
							>
								<span>Delegate</span>
							</motion.button>

							<a href={item.link} target='_blank' rel='noopener noreferrer'>
								<motion.button
									whileTap={{ scale: 0.95 }}
									className={
										theme === 'light'
											? styles.buttonExplorer
											: styles.buttonExplorer_dark
									}
									role='button'
								>
									<span>Explorer</span>
								</motion.button>
							</a>
						</div>
						<AnimatePresence
							initial={false}
							exitBeforeEnter={true}
							onExitComplete={() => null}
						>
							{modalOpen && (
								<Modal
									text={modalDesc}
									modalOpen={modalOpen}
									handleClose={close}
								/>
							)}
						</AnimatePresence>
					</div>
				)
			})}
		</div>
	)
}

export default Card
