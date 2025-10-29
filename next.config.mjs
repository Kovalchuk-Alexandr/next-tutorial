/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	reactCompiler: true,
	/* Для загрузки фото с удаленного хоста */
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'webcademy.ru' },
			{ protocol: 'https', hostname: 'images.unsplash.com' },
		],
	},
};

export default nextConfig;
