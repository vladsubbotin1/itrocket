import styles from '../styles/Header.module.scss'
import { motion } from 'framer-motion'
import { useContext, useEffect } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../pages/_app'

const Header = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)

	useEffect(() => {
		if (theme === 'dark') {
			document.body.style.backgroundColor = '#111'
			document.body.style.color = '#fff'
			let res = document.getElementsByClassName('ant-menu-light')
			for (let i = 0; i < res.length; i++) {
				if (res) res[i].classList.add('ant-menu-dark')
			}
			let title = document.getElementsByClassName('ant-menu-submenu-title')
			for (let i = 0; i < title.length; i++) {
				if (title) title[i].style.backgroundColor = '#222'
			}
		} else {
			document.body.style.backgroundColor = '#fff'
			document.body.style.color = '#111'
			let res = document.getElementsByClassName('ant-menu-light')
			for (let i = 0; i < res.length; i++) {
				if (res) res[i].classList.remove('ant-menu-dark')
			}
			let title = document.getElementsByClassName('ant-menu-submenu-title')
			for (let i = 0; i < title.length; i++) {
				if (title) title[i].style.backgroundColor = '#fff'
			}
		}
	}, [])

	return (
		<header className={styles.header}>
			<Link href='/'>
				<img
					src={theme === 'light' ? 'logoCropped.svg' : 'darkLogo.svg'}
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
			</div>
		</header>
	)
}

const spring = {
	type: 'spring',
	stiffness: 700,
	damping: 30,
}

export default Header
