import styles from '../styles/Header.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../pages/_app'
import Image from 'next/image'

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
							width={200}
							height={60}
							className={styles.logo}
							style={{ display: theme === 'light' ? 'block' : 'none' }}
						/>

						<Image
							src='/darkLogo.svg'
							alt='logo'
							width={200}
							height={60}
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

			<AnimatePresence
				initial={false}
				exitBeforeEnter={true}
				onExitComplete={() => null}
			>
				<div
					className={styles.burgerMenu}
					style={{
						backgroundColor: theme === 'dark' ? '#000' : '#fff',
						opacity: isOpen ? '1' : '0',
						display: isOpen ? 'flex' : 'none',
						padding: isOpen ? '10px 30px 20px' : '0',
					}}
				>
					<nav>
						<ul
							onClick={() => {
								setIsOpen(!isOpen)
							}}
						>
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

					<div className='socials'>
						<a
							href='https://t.me/SEM3gs'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Image
								src='/icons/tg.svg'
								alt='telegram'
								width={30}
								height={30}
							/>
						</a>

						<a
							href='https://discord.com/users/SEM#4095'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Image
								src='/icons/disc.svg'
								alt='discord'
								width={30}
								height={30}
							/>
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
					</div>
				</div>
			</AnimatePresence>
		</>
	)
}

export default Header
