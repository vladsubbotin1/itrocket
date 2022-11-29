import styles from '../styles/Header.module.scss'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const Header = () => {
	const [isOn, setIsOn] = useState(false)

	const toggleSwitch = () => {
		setIsOn(!isOn)
		if (isOn) {
			document.body.style.backgroundColor = 'white'
			document.body.style.color = '#111'
		} else {
			document.body.style.backgroundColor = '#111'
			document.body.style.color = 'white'
		}
	}

	return (
		<header className={styles.header}>
			<Link href='/'>
				<img
					src={!isOn ? '/logocropped.svg' : 'darkLogo.svg'}
					alt='logo'
					width='190px'
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
					data-ison={isOn}
					onClick={toggleSwitch}
					style={{ borderColor: isOn ? 'white' : 'black' }}
				>
					<motion.div
						className={styles.handle}
						layout
						transition={spring}
						style={{ backgroundColor: isOn ? 'white' : 'black' }}
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
