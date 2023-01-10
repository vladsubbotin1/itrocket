import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
const items = [
	{
		key: '1',
		label: (
			<a
				target='_blank'
				rel='noopener noreferrer'
				href='https://testnet.itrocket.net/'
				style={{ fontWeight: '500', fontSize: '16px' }}
			>
				Testnets
			</a>
		),
	},
	{
		key: '2',
		label: (
			<a
				target='_blank'
				rel='noopener noreferrer'
				href='https://mainnet.itrocket.net/'
				style={{ fontWeight: '500', fontSize: '16px' }}
			>
				Mainnets
			</a>
		),
	},
]
const DropdownComp = () => (
	<Dropdown
		menu={{
			items,
		}}
	>
		<a onClick={e => e.preventDefault()}>
			<Space style={{ fontSize: 'inherit', fontFamily: 'inherit' }}>
				Explorer
				<DownOutlined />
			</Space>
		</a>
	</Dropdown>
)
export default DropdownComp
