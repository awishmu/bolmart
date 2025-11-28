/** @type {import('next').NextConfig} import type { NextConfig } from 'next'; */

const nextConfig = {
	/** output: 'export', */
	basePath: '',
	images: {
	    remotePatterns: [
	      {
	        protocol: 'https',
	        hostname: 'awishmu.github.io/bolmart',
	      },
		  {
	        protocol: 'https',
	        hostname: 'media.istockphoto.com',
	        port: '',
	        pathname: '/**',
	      },
		  {
	        protocol: 'https',
	        hostname: 'cdn.pixabay.com',
	        port: '',
	        pathname: '/**',
	      },
		]
	  },
	
}

module.exports = nextConfig
