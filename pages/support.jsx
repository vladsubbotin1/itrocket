import React, { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Support.module.scss'
import Header from '../comps/Header'
import SideMenu from '../comps/SideMenu'
import { ThemeContext } from '../pages/_app.jsx'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import 'highlight.js/styles/github.css'

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

	const markdown = `## Support

Here are the tools for every network supported by ITRocket Team:

* [Axelar](/support/axelar/about)
* [Uptick](/support/axelar/about)
`

	return (
		<>
			<Head>
				<title>ITRocket - Support Provider 🚀</title>
				<meta
					name='description'
					content='ITRocket 🚀|The #1 Crypto Validator in the game'
				/>
			</Head>

			<Header />

			<div className={styles.container}>
				<SideMenu />
				<main className={styles.MainColumn}>
					<ReactMarkdown
						rehypePlugins={[rehypeHighlight]}
						remarkPlugins={[remarkGfm]}
					>
						{markdown}
					</ReactMarkdown>
				</main>
			</div>
		</>
	)
}
export default about
