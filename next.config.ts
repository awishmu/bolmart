/** @type {import('next').NextConfig} import type { NextConfig } from 'next'; */

const nextConfig = {
	/** output: 'export', */
	basePath: '',
	images: {
	    remotePatterns: [
	      {
	        protocol: 'https',
	        hostname: 'awishmu.github.io/bolmart',
	        port: '',
	        pathname: '/**',
	      },
		]
	  },
	
}

module.exports = nextConfig
