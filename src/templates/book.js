import React from 'react';
import { graphql } from 'gatsby';
import { addToCart } from '../store/actions';
import { useDispatch } from 'react-redux';
import Layout from '../components/Layout/Layout';
import { BookContainer } from '../pages.styles/book';
import { Message } from '../pages.styles/shop';

const Book = ({ data }) => {
	const [showMessage, setShowMessage] = React.useState(false);
	const dispatch = useDispatch();
	const book = data.booksJson;
	return (
		<Layout title={`${book.name} by ${book.author} | Gatsby Bookstore`}>
			<BookContainer>
				<img src={book.picture} alt={book.name} />
				<h1>{book.name}</h1>
				<h3>{book.author}</h3>
				<span>{book.price}</span>
				<p>{book.about}</p>
				<button
					onClick={() => {
						setShowMessage(true);
						dispatch(
							addToCart({
								_id: book._id,
								name: book.name,
								author: book.author,
								price: book.price,
							})
						);
						setTimeout(() => {
							setShowMessage(false);
						}, 1500);
					}}
				>
					Add To Cart
				</button>
			</BookContainer>
			{showMessage ? <Message>Product added to cart!</Message> : null}
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
