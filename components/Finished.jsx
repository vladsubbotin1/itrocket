import styles from '@styles/CardMain.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Finished = () => {
	let data = [
		{
			name: 'Ironfish',
			link: 'https://ironfish.network/',
			imgUrl: 'ironfish.png',
		},
		{
			name: 'Pontem',
			link: 'https://pontem.network/',
			imgUrl: 'pontem.svg',
		},
		// {
		// 	name: 'Quicksilver',
		// 	link: 'https://quicksilver.zone/',
		// 	imgUrl: 'quicksilver.jpg',
		// },
		{
			name: 'Empower',
			link: 'https://www.empowerchain.io/',
			imgUrl: 'empower.png',
		},
		{
			name: 'DeWeb',
			link: 'https://deweb.services/',
			imgUrl: 'deweb.png',
		},
		{
			name: 'Bifrost',
			link: 'https://thebifrost.io/',
			imgUrl: 'bifrost.png',
		},
		{
			name: 'Subspace',
			link: 'https://subspace.network/',
			imgUrl: 'subspace.jpg',
		},
	]

	return (
		<motion.div
			className={`${styles.card__root} ${styles.finishedRoot}`}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
			variants={{
				visible: {
					opacity: 1,
					y: 0,
				},
				hidden: { opacity: 0, y: 20 },
			}}
		>
			{data.map(item => {
				return (
					<div
						className={`${styles.card} ${styles.finishedCard}`}
						key={item.name}
					>
						<h5 className={styles.card__heading}>{item.name}</h5>
						<div className={styles.card__img} style={{ width: '40%' }}>
							<Image
								src={require('../public/finished/'.concat(item.imgUrl))}
								alt='item'
								layout='responsive'
								width='120'
								height='120'
								sizes='(max-width: 768px) 80vw,
              (max-width: 1200px) 20vw'
							/>
						</div>
					</div>
				)
			})}
		</motion.div>
	)
}

export default Finished
