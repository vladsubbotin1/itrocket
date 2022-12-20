import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { motion } from 'framer-motion'
import CardMain from '../comps/CardMain.jsx'
import CardTest from '../comps/CardTest.jsx'
import Footer from '../comps/Footer.jsx'
import Accordion from '../comps/Accordion.jsx'
import Header from '../comps/Header.jsx'
import { useState, useEffect } from 'react'
import Finished from '../comps/Finished.jsx'

export default function Home() {
	const [showing, setShowing] = useState(false)

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 0.5,
				staggerDirection: -1,
			},
		},
	}

	useEffect(() => {
		setShowing(true)
	}, [])

	if (!showing) {
		return null
	}

	if (typeof window === 'undefined') {
		return <></>
	} else {
		return (
			<div>
				<Head>
					<title>ITRocket - Staking Provider</title>
					<meta
						name='description'
						content='ITRocket 🚀 | Crypto Multipurpose Project'
					/>
				</Head>

				<Header />

				<main>
					<section className={styles.hero}>
						<div className={styles.container} style={{ paddingRight: '0px' }}>
							<div
								variants={container}
								initial='hidden'
								animate='show'
								className={styles.hero__wrapper}
							>
								<motion.div
									className={styles.hero__column}
									initial='hidden'
									whileInView='visible'
									viewport={{ once: true }}
									transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
									variants={{
										visible: {
											opacity: 1,
											y: 0,
										},
										hidden: { opacity: 0, y: 10 },
									}}
								>
									<h3 className={styles.hero__heading}>Staking provider</h3>
									<div className={styles.hero__dividerWrapper}>
										<svg
											width='50'
											height='20'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M2 8.5 6.2 4l7.8 6 6.6-5.55L27.5 10l4.65-5.1L39.2 10'
												stroke='#5AD3AF'
												strokeWidth='3'
											/>
										</svg>
									</div>

									<span className={styles.hero__desc}>
										Hi there, we are ITRocket team! Hope you all are having a
										great day and welcome aboard! With few simple steps you can
										delegate funds to our trusted validators. Your support will
										help us to develop WEB3 and together we can create the great
										future of decentralized services!
									</span>
								</motion.div>
								<motion.div
									className={styles.hero__column}
									initial='hidden'
									viewport={{ once: true }}
									whileInView='visible'
									transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
									variants={{
										visible: {
											opacity: 1,
											y: 0,
										},
										hidden: { opacity: 0, y: 10 },
									}}
								>
									<h3 className={styles.hero__heading}>Project support</h3>

									<div className={styles.hero__dividerWrapper}>
										<svg
											width='50'
											height='20'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M2 8.5 6.2 4l7.8 6 6.6-5.55L27.5 10l4.65-5.1L39.2 10'
												stroke='#A655E8'
												stroke-width='3'
											/>
										</svg>
									</div>

									<span className={styles.hero__desc}>
										On support page you can find guides that will be useful for
										node operators. We develop tools to help community and
										projects including: API, RPC, GRPC, State Sync Services, IBC
										Relayers. Our team believes in WEB3 and we are glad to be
										together with you among those who create future for
										everyone!
									</span>
								</motion.div>
							</div>
						</div>
					</section>

					<section id={styles.mainnetSection}>
						<div className={styles.container}>
							<motion.div
								className={styles.card__wrapper}
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
								<h3 className={styles.title} id='mainnet'>
									Mainnets
								</h3>
								<p className={styles.description}>
									<span>Low commission and </span>
									<span>24/7 node monitoring.</span>
									<br />
									<span>Delegate your tokens to our trusted validator!</span>
								</p>
								<CardMain />
							</motion.div>
						</div>
					</section>

					<section>
						<div className={styles.container}>
							<motion.div
								className={styles.card__wrapper}
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
								<h3 className={styles.title} id='testnet'>
									Active Testnets
								</h3>

								<p className={styles.description}>
									<span>Here are some basic tools for node operators.</span>
								</p>

								<CardTest />
							</motion.div>
						</div>
					</section>

					<section>
						<div className={styles.container}>
							<motion.div
								className={styles.card__wrapper}
								initial='hidden'
								whileInView='visible'
								viewport={{ once: true }}
								transition={{ duration: 0.8 }}
								variants={{
									visible: { opacity: 1 },
									hidden: { opacity: 0 },
								}}
							>
								<h3 className={styles.title} id='testnet'>
									Finished Testnets
								</h3>

								<p className={styles.description}>
									<span>
										These are the projects that we proudly took part in.
									</span>
								</p>

								<Finished />
							</motion.div>
						</div>
					</section>

					<section>
						<div className={styles.container}>
							<div className={styles.accordion__wrapper}>
								<h3 className={styles.hero__heading} id='faq'>
									FAQ
								</h3>
								<Accordion />
							</div>
						</div>
					</section>
				</main>
				<Footer />
			</div>
		)
	}
}
