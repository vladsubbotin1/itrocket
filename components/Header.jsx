import styles from '@styles/Header.module.scss'
import DropdownComp from '@components/DropdownComp'
import { motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../pages/_app'
import Image from 'next/image'

const ulVariants = {
	open: {
		transition: { staggerChildren: 0.1, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.07, staggerDirection: -1 },
	},
}

const liVariants = {
	open: {
		x: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		x: 30,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
}

const socialsVariants = {
	open: {
		opacity: 1,
		transition: { duration: 0.3, delay: 0.8 },
	},
	closed: {
		opacity: 0,
	},
}

const Header = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)
	const [isOpen, setIsOpen] = useState(false)

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

	const items = [
		<Link href='/#mainnet' scroll={false}>
			Mainnets
		</Link>,
		<Link href='/#testnet' scroll={false}>
			Testnets
		</Link>,
		<a href='https://mainnet.itrocket.net/'>Explorer (Mainnet)</a>,
		<a href='https://testnet.itrocket.net/'>Explorer (Testnet)</a>,
		<Link href='/support'>Support</Link>,
		<a href='https://snaps.itrocket.net/'>Files</a>,
		<Link href='/#faq' scroll={false}>
			FAQ
		</Link>,
	]

	const spring = {
		type: 'spring',
		stiffness: 700,
		damping: 30,
	}

	return (
		<>
			<header className={styles.header}>
				{
					<Link href='/'>
						<Image
							src='/logo.svg'
							alt='logo'
							width={190}
							height={55}
							className={styles.logo}
							style={{ display: theme === 'light' ? 'block' : 'none' }}
						/>

						<Image
							src='/darkLogo.svg'
							alt='logo'
							width={190}
							height={55}
							className={styles.logo}
							style={{ display: theme === 'dark' ? 'block' : 'none' }}
						/>
					</Link>
				}

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
								<DropdownComp />
							</li>
							<li>
								<Link href='/support'>Support</Link>
							</li>
							<li>
								<a href='https://snaps.itrocket.net/'>Files</a>
							</li>
							<li>
								<Link href='/#faq'>FAQ</Link>
							</li>
						</ul>
					</nav>

					<div className={styles.switch__wrapper}>
						<div
							className={styles.switch}
							data-ison={theme === 'dark'}
							onClick={toggleTheme}
						>
							<motion.div
								className={styles.handle}
								layout
								transition={spring}
								style={{
									backgroundColor: 'white',
								}}
							/>
						</div>
					</div>

					<button
						type='button'
						onClick={() => {
							setIsOpen(!isOpen)
						}}
						className={styles.burgerButton}
					>
						<div
							className={styles.burgerIconWrapper}
							style={{ gap: isOpen ? '0' : '10px' }}
						>
							<span
								style={{
									backgroundColor: theme === 'light' ? '#000' : '#fff',
									transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
								}}
							></span>
							<span
								style={{
									backgroundColor: theme === 'light' ? '#000' : '#fff',
									transform: isOpen ? 'rotate(-45deg)' : 'rotate(0deg)',
								}}
							></span>
						</div>
					</button>
				</div>
			</header>

			<motion.div
				className={styles.burgerMenu}
				style={{
					backgroundColor: theme === 'dark' ? '#000' : '#fff',
					display: isOpen ? 'flex' : 'none',
				}}
				transition={{ duration: 0.3, delay: 0.5 }}
			>
				<nav>
					<motion.ul
						onClick={() => {
							setIsOpen(!isOpen)
						}}
						initial={false}
						animate={isOpen ? 'open' : 'closed'}
						variants={ulVariants}
					>
						{items.map((item, i) => (
							<motion.li key={i} variants={liVariants}>
								{item}
							</motion.li>
						))}
					</motion.ul>
				</nav>

				<motion.div
					className='socials'
					initial={false}
					animate={isOpen ? 'open' : 'closed'}
					variants={socialsVariants}
				>
					<a
						href='https://t.me/SEM3gs'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image src='/icons/tg.svg' alt='telegram' width={30} height={30} />
					</a>

					<a
						href='https://twitter.com/SEM23404846'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image
							src='/icons/twitter.svg'
							alt='twitter'
							width={30}
							height={30}
						/>
					</a>
					<a
						href='https://github.com/itrocket-team'
						target='_blank'
						rel='noopener noreferrer'
						style={{ display: theme === 'light' ? 'block' : 'none' }}
					>
						<Image
							src='/icons/github.svg'
							alt='github'
							width={30}
							height={30}
						/>
					</a>
					<a
						href='https://github.com/itrocket-team'
						target='_blank'
						rel='noopener noreferrer'
						style={{ display: theme !== 'light' ? 'block' : 'none' }}
					>
						<Image
							src='/icons/github-white.svg'
							alt='github'
							width={30}
							height={30}
						/>
					</a>
				</motion.div>
			</motion.div>
		</>
	)
}

export default Header
