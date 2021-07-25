import React from 'react'
// @ts-ignore
import { Route, Switch} from 'react-router-dom'
import Search from './pages/Search'

const App: React.FC = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={Search} />
			</Switch>
		</div>
	)
}

export default App
