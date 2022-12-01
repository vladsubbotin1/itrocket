import { createContext, useState } from 'react'
import '../styles/globals.scss'

export const ThemeContext = createContext(null)

function MyApp({ Component, pageProps }) {
	const [theme, setTheme] = useState('light')

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
		changeStyles()
	}

	const changeStyles = () => {
		if (theme === 'light') {
			document.body.style.backgroundColor = '#111'
			document.body.style.color = '#fff'
			let res = document.getElementsByClassName('ant-menu-light')
			for (let i = 0; i < res.length; i++) {
				if (res) res[i].classList.add('ant-menu-dark')
			}
			let title = document.getElementsByClassName('ant-menu-submenu-title')
			for (let i = 0; i < title.length; i++) {
				if (title) title[i].style.backgroundColor = '#000'
			}
			let active = document.querySelector(`div[aria-expanded='true']`)
			if (active) active.style.backgroundColor = '#030329'
		} else {
			document.body.style.backgroundColor = '#fff'
			document.body.style.color = '#111'
			let res = document.getElementsByClassName('ant-menu-light')
			for (let i = 0; i < res.length; i++) {
				if (res) res[i].classList.remove('ant-menu-dark')
			}
			let title = document.getElementsByClassName('ant-menu-submenu-title')
			for (let i = 0; i < title.length; i++) {
				if (title) title[i].style.backgroundColor = '#fff'
			}
			let active = document.querySelector(`div[aria-expanded='true']`)
			if (active) active.style.backgroundColor = '#dbeafe'
		}
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<Component {...pageProps} />
		</ThemeContext.Provider>
	)
}

export default MyApp
