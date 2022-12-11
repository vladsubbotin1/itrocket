import React, { useEffect, useMemo } from 'react'
import { notification } from 'antd'
const Context = React.createContext({
	name: 'Default',
})

const Notification = () => {
	const [api, contextHolder] = notification.useNotification()
	let counter = 0

	useEffect(() => {
		if (counter > 0) openNotification('topLeft')
		counter++
	}, [])

	const openNotification = placement => {
		api.info({
			message: 'Information',
			description: (
				<span>
					The service is still in development. We apologize for any
					inconvenience.
				</span>
			),
			placement,
		})
	}
	const contextValue = useMemo(
		() => ({
			name: 'Ant Design',
		}),
		[]
	)
	return (
		<Context.Provider value={contextValue}>{contextHolder}</Context.Provider>
	)
}
export default Notification
