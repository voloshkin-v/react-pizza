import React from 'react';
import {Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {Header} from './components';
import {Home, Cart} from './pages';
import {setPizzas} from './redux/actions/pizzas';


function App() {
	const dispatch = useDispatch();

	React.useEffect(() => {
		fetch('http://localhost:3000/db.json')
			.then(response => response.json())
			.then(json => {
				dispatch(setPizzas(json.pizzas));
			});
	}, []);

	
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Route path='/' component={Home} exact />
				<Route path='/cart' component={Cart} exact />
			</div>
		</div>
	);
}

export default App;