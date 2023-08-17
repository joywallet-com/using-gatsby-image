module.exports = {
	plugins: [
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/content`,
			},
		},
		`gatsby-transformer-yaml`,
		{
			resolve: `gatsby-source-remote-images`,
			options: {
				filter: node => node.internal.type === `UnsplashImagesYaml`,
			},
		},
	],
}

