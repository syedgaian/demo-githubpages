/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		remotePatterns: [
			{
				hostname: "https://syedgaian.github.io/demo-githubpages/",
			},
		],
	},
};

export default nextConfig;
