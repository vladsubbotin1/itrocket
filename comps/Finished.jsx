import styles from '../styles/Finished.module.scss'
import Image from 'next/image'

const Finished = () => {
	let data = [
		{
			id: 1,
			name: 'Ironfish',
			link: 'https://ironfish.network/',
			imgUrl: 'ironfish.png',
		},
		{
			id: 2,
			name: 'Pontem',
			link: 'https://pontem.network/',
			imgUrl: 'pontem.svg',
		},
		{
			id: 3,
			name: 'Quicksilver',
			link: 'https://quicksilver.zone/',
			imgUrl: 'quicksilver.jpg',
		},
	]

	return (
		<div className={styles.root}>
			{data.map(item => (
				<div className={styles.wrapper} key={item.id}>
					<div className={styles.img}>
						<Image
							src={require('../public/finished/'.concat(item.imgUrl))}
							alt='item'
							layout='responsive'
						/>
					</div>
				</div>
			))}
		</div>
	)
}

export default Finished
