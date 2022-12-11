import styles from '../styles/Header.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import Modal from './Modal'
import Link from 'next/link'
import { ThemeContext } from '../pages/_app'

const Header = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)
	const [isOpen, setIsOpen] = useState(false)

	const [modalOpen, setModalOpen] = useState(false)
	const close = () => setModalOpen(false)
	const open = () => setModalOpen(true)

	const modalDesc = (
		<ul className={styles.burgerMenu}>
			<li>
				<Link href='/#mainnet' onClick={close}>
					Mainnets
				</Link>
				<svg
					width='50'
					height='20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M2 8.5 6.2 4l7.8 6 6.6-5.55L27.5 10l4.65-5.1L39.2 10'
						stroke='#5AD3AF'
						strokeWidth='3'
					/>
				</svg>
			</li>
			<li>
				<Link href='/#testnet' onClick={close}>
					Testnets
				</Link>
				<svg
					width='50'
					height='20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M2 8.5 6.2 4l7.8 6 6.6-5.55L27.5 10l4.65-5.1L39.2 10'
						stroke='#5AD3AF'
						strokeWidth='3'
					/>
				</svg>
			</li>
			<li>
				<Link href='/support' onClick={close}>
					Services
				</Link>
				<svg
					width='50'
					height='20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M2 8.5 6.2 4l7.8 6 6.6-5.55L27.5 10l4.65-5.1L39.2 10'
						stroke='#5AD3AF'
						strokeWidth='3'
					/>
				</svg>
			</li>

			<li>
				<Link href='/#faq' onClick={close}>
					FAQ
				</Link>
				<svg
					width='50'
					height='20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M2 8.5 6.2 4l7.8 6 6.6-5.55L27.5 10l4.65-5.1L39.2 10'
						stroke='#5AD3AF'
						strokeWidth='3'
					/>
				</svg>
			</li>
		</ul>
	)

	useEffect(() => {
		const code = document.getElementsByTagName('code')

		if (theme === 'dark') {
			document.body.style.backgroundColor = '#111'
			document.body.style.color = '#fff'

			for (let i = 0; i < code.length; i++) {
				if (code) {
					code[i].style.color = '#dbeafe'
					code[i].style.backgroundColor = '#223'
				}
			}
		} else {
			document.body.style.backgroundColor = '#fff'
			document.body.style.color = '#111'

			for (let i = 0; i < code.length; i++) {
				if (code) {
					code[i].style.color = '#111'
					code[i].style.backgroundColor = '#eee'
				}
			}
		}
	}, [])

	return (
		<header className={styles.header}>
			<Link href='/'>
				<img
					src={theme === 'light' ? '/logoCropped.svg' : '/darkLogo.svg'}
					alt='logo'
					width='210px'
					className={styles.logo}
				/>
			</Link>

			<div className={styles.headerNav__wrapper}>
				<nav className={styles.headerNav}>
					<ul>
						<li>
							<Link href='/#mainnet'>Mainnets</Link>
						</li>
						<li>
							<Link href='/#testnet'>Testnets</Link>
						</li>
						<li>
							<Link href='/support'>Services</Link>
						</li>

						<li>
							<Link href='/#faq'>FAQ</Link>
						</li>
					</ul>
				</nav>
				<div
					className={styles.switch}
					data-ison={theme === 'dark'}
					onClick={toggleTheme}
					style={{ borderColor: theme === 'dark' ? 'white' : 'black' }}
				>
					<motion.div
						className={styles.handle}
						layout
						transition={spring}
						style={{ backgroundColor: theme === 'dark' ? 'white' : 'black' }}
					/>
				</div>
				<button
					className={
						isOpen === true
							? 'hamburger hamburger--squeeze is-active'
							: 'hamburger hamburger--squeeze'
					}
					type='button'
					onClick={() => {
						modalOpen ? close() : open()
					}}
				>
					<span className='hamburger-box'>
						<span
							className={
								theme === 'light'
									? 'hamburger-inner'
									: 'hamburger-inner hamburger-inner__darkMode'
							}
						></span>
					</span>
				</button>
			</div>
			<AnimatePresence
				initial={false}
				exitBeforeEnter={true}
				onExitComplete={() => null}
			>
				{modalOpen && (
					<Modal text={modalDesc} modalOpen={modalOpen} handleClose={close} />
				)}
			</AnimatePresence>
		</header>
	)
}

const spring = {
	type: 'spring',
	stiffness: 700,
	damping: 30,
}

export default Header
