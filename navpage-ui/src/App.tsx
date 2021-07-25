import React from 'react'
// @ts-ignore
import { Route, Switch} from 'react-router-dom'
import Search from './pages/Search'

const App: React.FC = () => {
	return (
			<Switch>
				<Route exact path='/' component={Search} />
			</Switch>
	)
}

export default App
