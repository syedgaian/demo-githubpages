/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: "/demo-githubpages",
	output: "export",
	distDir: "build",
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				hostname: "https://syedgaian.github.io/demo-githubpages/",
			},
		],
	},
};

export default nextConfig;
