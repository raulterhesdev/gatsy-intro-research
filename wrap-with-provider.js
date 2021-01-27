import React from 'react';
import { Provider } from 'react-redux';

import createStore, { sagaMiddleware } from './src/store';
import rootSaga from './src/store/saga';

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
	// Instantiating store in `wrapRootElement` handler ensures:
	//  - there is fresh store for each SSR page
	//  - it will be called only once in browser, when React mounts
	const store = createStore();
	sagaMiddleware.run(rootSaga);
	return <Provider store={store}>{element}</Provider>;
};
