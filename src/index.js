import React,{Component} from 'react';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

const store = createStore(reducer,applyMiddleware(thunk));


import Index from './page/index';

export default class Main extends Component{
	render(){
		return(
			<Provider store={store}>
				<Index></Index>
			</Provider>
		)
	}
}
