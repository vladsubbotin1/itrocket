import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import styles from '../styles/Modal.module.scss'
import { ThemeContext } from '../pages/_app'
import { useContext } from 'react'

const dropIn = {
	hidden: {
		y: '-100vh',
	},
	visible: {
		y: '0',
		opacity: 1,
		transition: { duration: 0.5 },
	},
	exit: {
		y: '100vh',
	},
}

const Modal = ({ handleClose, text }) => {
	const { theme, toggleTheme } = useContext(ThemeContext)

	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				onClick={e => e.stopPropagation()}
				className={styles.modal}
				style={{
					backgroundColor:
						theme === 'light'
							? 'rgba(255, 255, 255, 0.9)'
							: 'rgba(255, 255, 255, 0.01)',
					color: theme === 'light' ? '#000' : '#fff',
				}}
				variants={dropIn}
				initial='hidden'
				animate='visible'
				exit='exit'
			>
				<div>{text}</div>
				<button onClick={handleClose} className={styles.exit}>
					<span>x</span>
				</button>
			</motion.div>
		</Backdrop>
	)
}

export default Modal
