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
import Rocket from '../public/justRocket.svg'
import Text from '../public/justText.svg'
import Image from 'next/image'

export default function Home() {
	const [showing, setShowing] = useState(false)

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
						content='ITRocket 🚀|The #1 Crypto Validator in the game'
					/>
				</Head>

				<Header />

				<main>
					<section className={styles.hero}>
						<div className={styles.container} style={{ paddingRight: '0px' }}>
							<div className={styles.hero__wrapper}>
								<motion.div
									className={styles.hero__columnWide}
									initial='hidden'
									whileInView='visible'
									viewport={{ once: true }}
									transition={{ duration: 1 }}
									variants={{
										visible: { opacity: 1, x: 0 },
										hidden: { opacity: 0, x: -50 },
									}}
								>
									<div className={styles.reveal__wrapper}>
										<h3 className={styles.hero__heading}>
											Trusted staking provider
										</h3>
										<span className={styles.hero__desc}>
											Hi there, we are ITRocket team! Hope you all are having a
											great day and welcome aboard! With few simple steps you
											can delegate funds to our trusted validators. Your support
											will help us to develop WEB3 and together we can create
											the great future of decentralized services!
										</span>
									</div>

									<motion.div
										initial='hidden'
										whileInView='visible'
										viewport={{ once: true }}
										transition={{ duration: 1 }}
										variants={{
											visible: { opacity: 1 },
											hidden: { opacity: 0 },
										}}
									>
										<h3 className={styles.hero__heading}>
											Community and project support
										</h3>
										<span className={styles.hero__desc}>
											On support page you can find guides that will be useful
											for node operators. We develop tools to help community and
											projects including: API, RPC, GRPC, State Sync Services,
											IBC Relayers. Our team believes in WEB3 and we are glad to
											be together with you among those who creates future for
											everyone!
										</span>
									</motion.div>
								</motion.div>

								<motion.div
									className={styles.hero__columnNarrow}
									initial='hidden'
									whileInView='visible'
									viewport={{ once: true }}
									transition={{ duration: 1 }}
									variants={{
										visible: { opacity: 1, x: 0 },
										hidden: { opacity: 0, x: 50 },
									}}
								>
									<div className={styles.rocketWrapper}>
										<Image
											className={styles.rocket}
											src={Rocket}
											alt='Rocket'
											width='450'
										/>
										<Image
											className={styles.text}
											src={Text}
											alt='Text'
											width='450'
										/>
									</div>
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
								transition={{ duration: 1 }}
								variants={{
									visible: { opacity: 1 },
									hidden: { opacity: 0 },
								}}
							>
								<h3 className={styles.title} id='mainnet'>
									Mainnets
								</h3>

								<p className={styles.description}>
									<span>Low commission and </span>
									<code className={styles.code}>24/7 node monitoring.</code>
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
								transition={{ duration: 1 }}
								variants={{
									visible: { opacity: 1 },
									hidden: { opacity: 0 },
								}}
							>
								<h3 className={styles.title} id='testnet'>
									Active Testnets
								</h3>

								<p className={styles.description}>
									<span>Low commission and </span>
									<code className={styles.code}>24/7 node monitoring.</code>
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
								transition={{ duration: 1 }}
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
