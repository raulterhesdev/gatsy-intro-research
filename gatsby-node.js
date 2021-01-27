const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;

	if (node.internal.type === 'BooksJson') {
		const slug = `shop/book/${node._id}`;
		createNodeField({
			node,
			name: `slug`,
			value: `${slug}`,
		});
	}
};

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`
		query {
			allBooksJson {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	result.data.allBooksJson.edges.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: path.resolve(`./src/templates/book.js`),
			context: {
				// Data passed to context is available
				// in page queries as GraphQL variables.
				slug: node.fields.slug,
			},
		});
	});
};
