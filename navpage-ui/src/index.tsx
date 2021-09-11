import React from 'react'
import ReactDOM from 'react-dom'
// @ts-ignore
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.render(
	<HashRouter>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</HashRouter>,
	document.getElementById('root')
)
