/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: '**.pexels.com',
			},
		],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	}
}

module.exports = nextConfig
