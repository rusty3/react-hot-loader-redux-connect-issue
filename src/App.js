import React from 'react'
import { hot } from 'react-hot-loader'
import Counter from './Counter'
import ConnectedContainer from './ConnectedContainer';

const App = () => (
		<div>
			<Counter />
    	<ConnectedContainer />
		</div>
)

export default hot(module)(App)