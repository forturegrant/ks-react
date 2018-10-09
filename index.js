import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store from './app/store/configureStore'
import App from './app/containers'
import './skin.less'

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'))

if(module.hot){
	module.hot.accept();
}