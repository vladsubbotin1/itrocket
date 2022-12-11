import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import styles from '../styles/Modal.module.scss'

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
	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				onClick={e => e.stopPropagation()}
				className={styles.modal}
				variants={dropIn}
				initial='hidden'
				animate='visible'
				exit='exit'
			>
				<div>{text}</div>
				<button onClick={handleClose} className={styles.exit}>
					x
				</button>
			</motion.div>
		</Backdrop>
	)
}

export default Modal
