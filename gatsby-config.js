module.exports = {
	siteMetadata: {
		title: 'Gatsby Bookstore',
		siteUrl: 'https://raulterhes.com',
	},
	plugins: [
		'gatsby-plugin-styled-components',
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images/`,
			},
		},
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'products',
				path: `./src/data/`,
			},
		},
		{
			resolve: `gatsby-plugin-create-client-paths`,
			options: { prefixes: [`/cart/*`] },
		},
		`gatsby-plugin-transition-link`,
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Gatsby Bookstore`,
				short_name: `Gatsby Bookstore`,
				description: 'Gatsby Bookstore - Buy amazing fake books',
				lang: 'en',
				start_url: `/`,
				background_color: `#f7f0eb`,
				theme_color: `#a2466c`,
				display: `standalone`,
				icon: `src/images/icon.png`,
			},
		},
		'gatsby-plugin-offline',
	],
};
