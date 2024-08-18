/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: "/demo-githubpages",
	output: "export",
	distDir: "build",
	images: {
		remotePatterns: [
			{
				hostname: "https://syedgaian.github.io/demo-githubpages/",
			},
		],
	},
};

export default nextConfig;
