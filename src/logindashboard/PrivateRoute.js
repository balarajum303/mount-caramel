import React, { useState } from "react";
import { Navigate , Routes , Route } from "react-router-dom";

export default function PrivateRoute({ path, component, ...rest }) {
	const [ isLoggedin, setIsLoggedIn ] = useState(localStorage.getItem("loggedin"));
	return (
		<div>
			<Routes >
				<Route path={path} component={component} {...rest} />
			</Routes >
			{isLoggedin === null && <Navigate  to="/login" />}
		</div>
	);
}
