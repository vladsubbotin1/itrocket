import '../styles/Footer.module.scss'
import styles from '../styles/Footer.module.scss'
import Image from 'next/image'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.footer__logo}>
					<Image
						src='/darkLogo.svg'
						alt='ITRocket Logo'
						width={200}
						height={150}
					/>
				</div>

				<div className={styles.copyright}>
					<span>© 2022 ITRocket</span>
				</div>
				<div className='socials'>
					<a
						href='https://t.me/SEM3gs'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image src='/icons/tg.svg' alt='telegram' width={40} height={40} />
					</a>

					<a
						href='https://discord.com/users/SEM#4095'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image src='/icons/disc.svg' alt='discord' width={40} height={40} />
					</a>
					<a
						href='https://twitter.com/SEM23404846'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image
							src='/icons/twitter.svg'
							alt='twitter'
							width={40}
							height={40}
						/>
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
