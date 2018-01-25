import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import users from './reducer';

const root = document.createElement('div')
document.body.appendChild(root)


const store = createStore(users);

render(
<Provider store={store}>
	<App />
</Provider>
	, root)