import '../styles/Footer.module.scss'
import styles from '../styles/Footer.module.scss'
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.footer__logo}>
					<Image
						src='/darkLogo.svg'
						alt='ITRocket Logo'
						width={200}
						height={170}
					/>
				</div>

				<div className={styles.copyright}>
					<span>© 2022 ITRocket Team.</span>
				</div>
				<div className={styles.socials}>
					<SocialIcon url='https://t.me/@SEM3gs' fgColor='white' />
					<SocialIcon
						url='https://discordapp.com/users/SEM#4095'
						fgColor='white'
					/>
				</div>
			</div>
		</footer>
	)
}

export default Footer
