import React from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import Logo from "../../assets/buttons/logo.png";
import "./Header.css";

const Header = props => {

	const current = props.current;

  	return (
    	<header>
    		<NavLink className = "navbar-brand" to={appRoutes.map}>
    			<img src={Logo} className = "navbar-brand-title"/>
    		</NavLink>

        	<div className="sidebar">
	        	<Switch>
			          <Route exact path={appRoutes.room}>
			            <NavLink className = "nav-link" to={appRoutes.map}>
			    			MAP
			    		</NavLink>
			          </Route>
			          <Route exact path={appRoutes.map}>
			            <NavLink className = "nav-link" to={`${appRoutes.rooms}/${current}`}>
			    			BACK
			    		</NavLink>
				      </Route>
	        	</Switch>
        	</div>
    		
    	</header>
  	);
};

export default Header;