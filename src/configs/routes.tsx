import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./auth";
import Login from '../pages/Login/Login';

// @ts-ignore
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			isAuthenticated() ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: "/", state: { from: props.location } }} />
			)
		}
	/>
);

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Login} />
			<Route path="/signup" component={() => <h1>SignUp</h1>} />
			<PrivateRoute path="/app" component={() => <h1>App</h1>} />
			<Route path="*" component={Login} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
