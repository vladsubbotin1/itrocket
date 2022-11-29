import Image from 'next/image'
import styles from '../styles/CardMain.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Modal from './Modal'

const Card = () => {
	const [modalOpen, setModalOpen] = useState(false)
	const close = () => setModalOpen(false)
	const open = () => setModalOpen(true)

	let data = [
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
	]

	const NYMDesc = (
		<span>
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
			<a href='https://t.me/SEM3gs' style={{ color: '#f0f' }}>
				Telegram!
			</a>
			<br />
			<br />
			<b>Identity Key:</b> 6L1geN6S9n7SMvgajjptj6p96sCSMfxWmbR8dJ3G3f5
			<br />
			<span>
				{' '}
				<b>Our Mixnode Details </b> -{' '}
			</span>
			<a
				href='https://mixnet.explorers.guru/mixnode/6L1geN6S9n7SMvgajjptj6p96sCSMfxWmbR8dJ3G3f5'
				style={{ color: '#f0f' }}
			>
				here
			</a>
		</span>
	)

	const FortaDesc = (
		<span>
			<b>ITRocket team invites you to delegate to our node. Welcome aboard!</b>
			<br />
			<br />
			<br /> <b>Only 3% fees</b> - guaranteed to never go up <br /> <br />
			We offer you: <br />
			🚀 High quality hardware <br />
			🚀 Only one node on the server <br />
			🚀 24/7 node monitoring <br />
			🚀 Tech support for delegators
			<br />
			<br /> If you have any questions, feel free to contact us on{' '}
			<a href='https://t.me/SEM3gs' style={{ color: '#f0f' }}>
				Telegram!
			</a>
			<br />
			<br />
			<b>Forta Ethereum scan node: </b>{' '}
			<a
				href='https://explorer.forta.network/scan-node/0x7c224eB61cF0Dd6aD66F04fb7211dc842EA130e3'
				style={{ color: '#f0f' }}
			>
				here
			</a>
			<br />
			<b>Forta Optymism scan node: </b>{' '}
			<a
				href='https://explorer.forta.network/scan-node/0x716dBd07d5613b96617a2454231f408A8598D8CE'
				style={{ color: '#f0f' }}
			>
				here
			</a>
		</span>
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
							/>
						</div>
						{/* <div className={styles.card__text}>
							{item?.address && (
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
						<div className={styles.button__wrapper}>
							<motion.button
								whileTap={{ scale: 0.95 }}
								className={styles.buttonDelegate}
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
									class={styles.buttonExplorer}
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
						</AnimatePresence>{' '}
					</div>
				)
			})}
		</div>
	)
}

export default Card
