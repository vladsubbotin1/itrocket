import styles from '../styles/CardMain.module.scss'
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
		{
			id: 4,
			name: 'Empower',
			link: 'https://www.empowerchain.io/',
			imgUrl: 'empower.png',
		},
		{
			id: 5,
			name: 'DeWeb',
			link: 'https://deweb.services/',
			imgUrl: 'deweb.png',
		},
		{
			id: 6,
			name: 'Bifrost',
			link: 'https://thebifrost.io/',
			imgUrl: 'bifrost.png',
		},
		{
			id: 7,
			name: 'Subspace',
			link: 'https://subspace.network/',
			imgUrl: 'subspace.jpg',
		},
	]

	return (
		<div className={styles.card__root}>
			{data.map(item => {
				return (
					<div className={styles.card} key={item.id}>
						<h5 className={styles.card__heading}>{item.name}</h5>
						<div className={styles.card__img}>
							<Image
								src={require('../public/finished/'.concat(item.imgUrl))}
								alt='item'
								layout='responsive'
								width='150'
								height='150'
								sizes='(max-width: 768px) 80vw,
              (max-width: 1200px) 20vw'
							/>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Finished
