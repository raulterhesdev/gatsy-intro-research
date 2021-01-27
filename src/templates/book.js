import React from 'react';
import { graphql } from 'gatsby';
import { addToCart } from '../store/actions';
import { useDispatch } from 'react-redux';
import Layout from '../components/Layout/Layout';

const Book = ({ data }) => {
	const dispatch = useDispatch();
	const book = data.booksJson;
	return (
		<Layout title={`${book.name} by ${book.author} | Gatsby Bookstore`}>
			<div>
				<h1>{book.name}</h1>
				<h3>{book.author}</h3>
				<p>{book.price}</p>
				<p>{book.about}</p>
				<img src={book.picture} alt={book.name} />
				<button
					onClick={() => {
						dispatch(
							addToCart({
								_id: book._id,
								name: book.name,
								author: book.author,
								price: book.price,
							})
						);
					}}
				>
					Add To Cart
				</button>
			</div>
		</Layout>
	);
};

export default Book;

export const query = graphql`
	query($slug: String!) {
		booksJson(fields: { slug: { eq: $slug } }) {
			about
			author
			_id
			name
			picture
			price
		}
	}
`;
