import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import { addToCart } from '../store/actions';
import { useDispatch } from 'react-redux';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Card, Grid, Text, Title, Button, Message } from '../pages.styles/shop';

const ShopPage = ({ data }) => {
	const [showMessage, setShowMessage] = React.useState(false);
	const dispatch = useDispatch();

	return (
		<Layout title='Store | Gatsby Bookstore'>
			<Grid>
				{data.allBooksJson.edges.map(({ node }) => (
					<Card key={node._id}>
						<img src={node.picture} alt={node.name} />
						<Title>
							<AniLink cover bg='#663399' to={`book/${node._id}`}>
								<span>{node.name}</span>
							</AniLink>
						</Title>
						<Text>{node.author}</Text>
						<Text>${node.price}</Text>
						<Button
							onClick={() => {
								setShowMessage(true);
								dispatch(addToCart(node));
								setTimeout(() => {
									setShowMessage(false);
								}, 1500);
							}}
						>
							Add To Cart
						</Button>
					</Card>
				))}
			</Grid>
			{showMessage ? <Message>Product added to cart!</Message> : null}
		</Layout>
	);
};

export default ShopPage;

export const query = graphql`
	query {
		allBooksJson {
			edges {
				node {
					author
					_id
					name
					price
					picture
				}
			}
		}
	}
`;
