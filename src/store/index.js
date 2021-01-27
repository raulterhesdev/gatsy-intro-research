import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

const createStore = () =>
	reduxCreateStore(
		reducer,
		composeWithDevTools(applyMiddleware(sagaMiddleware))
	);

export default createStore;
