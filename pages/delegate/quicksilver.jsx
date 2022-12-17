import React, { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '../../comps/Header'
import { ThemeContext } from '../pages/_app.jsx'
import 'highlight.js/styles/github.css'
import { Typography } from 'antd'
const { Paragraph } = Typography

const about = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)
	const [current, setCurrent] = useState('1')

	useEffect(() => {
		let typo = document.getElementsByClassName('ant-typography')

		for (let i = 0; i < typo.length; i++) {
			if (theme === 'light' && typo) typo[i].style.color = '#111'
			else typo[i].style.color = '#fff'
		}
	}, [theme])

	return (
		<>
			<Head>
				<title>ITRocket - Staking Provider</title>
				<meta
					name='description'
					content='ITRocket 🚀 | Crypto Multipurpose Project'
				/>
			</Head>

			<Header />

			<div className={styles.container}></div>
		</>
	)
}
export default about
