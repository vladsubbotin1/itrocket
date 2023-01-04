/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},

	exportPathMap: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	) {
		return {
			'/': { page: '/' },
			'/support': { page: '/support' },
			'/support/testnet/axelar': {
				page: '/support/testnet/axelar',
			},
			'/support/testnet/blastapi': {
				page: '/support/testnet/blastapi',
			},
			'/support/testnet/bundlr': {
				page: '/support/testnet/bundlr',
			},
			'/support/testnet/celestia': {
				page: '/support/testnet/celestia',
			},
			'/support/testnet/defund': {
				page: '/support/testnet/defund',
			},
			'/support/testnet/gear': {
				page: '/support/testnet/gear',
			},
			'/support/testnet/haqq': {
				page: '/support/testnet/haqq',
			},
			'/support/testnet/humans': {
				page: '/support/testnet/humans',
			},
			'/support/testnet/kira': {
				page: '/support/testnet/kira',
			},
			'/support/testnet/masa': {
				page: '/support/testnet/masa',
			},
			'/support/testnet/massa': {
				page: '/support/testnet/massa',
			},
			'/support/testnet/nibiru': {
				page: '/support/testnet/nibiru',
			},
			'/support/testnet/nois': {
				page: '/support/testnet/nois',
			},
			'/support/testnet/nolus': {
				page: '/support/testnet/nolus',
			},
			'/support/testnet/oasys': {
				page: '/support/testnet/oasys',
			},
			'/support/testnet/penumbra': {
				page: '/support/testnet/penumbra',
			},
			'/support/testnet/sei': {
				page: '/support/testnet/sei',
			},
			'/support/testnet/starknet': {
				page: '/support/testnet/starknet',
			},
			'/support/testnet/sui': {
				page: '/support/testnet/sui',
			},
			'/support/testnet/terp': {
				page: '/support/testnet/terp',
			},
			'/support/testnet/uptick': {
				page: '/support/testnet/uptick',
			},
			'/support/mainnet/forta': {
				page: '/support/mainnet/forta',
			},
			'/support/mainnet/nym': {
				page: '/support/mainnet/nym',
			},
			'/support/mainnet/quicksilver': {
				page: '/support/mainnet/quicksilver',
			},
		}
	},
}

module.exports = nextConfig
