import Image from 'next/image'
import styles from '../styles/CardMain.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useState } from 'react'
import Modal from './Modal'
import { ThemeContext } from '../pages/_app'

const Card = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)

	const [modalOpen, setModalOpen] = useState(false)
	const close = () => setModalOpen(false)
	const open = () => setModalOpen(true)

	let data = [
		{
			id: 1,
			name: 'NYM',
			link: 'https://mixnet.explorers.guru/',
			imgUrl: 'nym.png',
		},
		{
			id: 2,
			name: 'Forta',
			link: 'https://explorer.forta.network/',
			imgUrl: 'forta.jpg',
		},
	]

	const NYMDesc = (
		<>
			<b>
				ITRocket team invites you to delegate to our node hosted in the USA!{' '}
			</b>
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
			<b>Identity Key:</b> 6L1geN6S9n7SMvgajjptj6p96sCSMfxWmbR8dJ3G3f5
			<br />
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

	const [modalDesc, setModalDesc] = useState(false)
	const first = () => setModalDesc(NYMDesc)
	const second = () => setModalDesc(FortaDesc)

	return (
		<div className={styles.card__root}>
			{data.map(item => {
				return (
					<div className={styles.card} key={item.id}>
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
									item.id == 1 ? first() : second()
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
