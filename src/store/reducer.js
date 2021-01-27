import { ADD_TO_CART } from './actions';

const initialState = {
	cart: [],
	price: 0,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_TO_CART:
			const item = payload;

			let update = [...state.cart];
			if (state.cart.filter((el) => el._id === item._id).length === 0) {
				item.quantity = 1;
				update.push(item);
			} else {
				update.forEach((el) => {
					if (el._id === item._id) {
						el.quantity += 1;
					}
				});
			}

			return { ...state, price: state.price + +item.price, cart: update };
		default:
			return state;
	}
};
