import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';

const mapStateToProps = state => {
    return ({
        loggedIn: Boolean(state.session.currentUser)
    });
};

const Auth = ({loggedIn, path, exact, component: Component}) => { // if loggedin redirect to discover, else render component
    return (
        <Route 
            path={path}
            exact={exact}
            render={props => {
                return loggedIn ? <Redirect to="/discover" /> : <Component {...props} />
            }}
        />
    );
};

const Protected = ({loggedIn, path, exact, component: Component}) => { // if logged in, load component. else redirect to "/" to sign in
    return (
        <Route 
            path={path}
            exact={exact}
            render={props => {
                return loggedIn ? <Component {...props} /> : <Redirect to="/" />
            }}
        />
    )
}

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected))