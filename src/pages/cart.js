import React from 'react';
import Layout from '../components/Layout/Layout';
import { useSelector } from 'react-redux';
import { TableRow, Cart, Table, ButtonContainer } from '../pages.styles/cart';
import { Message } from '../pages.styles/shop';

const CartPage = () => {
	const [showMessage, setShowMessage] = React.useState(false);
	const cart = useSelector((state) => state.cart);
	const totalPrice = useSelector((state) => state.price);

	const sendOrder = () => {
		if (cart.length > 0) {
			setShowMessage(true);
			setTimeout(() => {
				setShowMessage(false);
			}, 1500);
		}
	};

	return (
		<Layout title='Cart | Gatsby Bookstore'>
			<Cart>
				<h1>Your cart:</h1>
				<Table>
					<TableRow isTableHead={true}>
						<span>Quantity</span>
						<span>Title</span>
						<span>Author</span>
						<span>Price / Unit</span>
						<span>Price</span>
					</TableRow>
					{cart.map((item) => (
						<TableRow key={item._id}>
							<span>{item.quantity}</span>
							<span>{item.name}</span>
							<span>{item.author}</span>
							<span>${item.price}</span>
							<span>${item.quantity * +item.price}</span>
						</TableRow>
					))}
				</Table>
				<h3>Total Price: ${totalPrice}</h3>
				<ButtonContainer>
					<button onClick={sendOrder}>Send order</button>
				</ButtonContainer>
			</Cart>
			{showMessage ? <Message>Order Sent!</Message> : null}
		</Layout>
	);
};

export default CartPage;
