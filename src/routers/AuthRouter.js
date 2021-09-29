import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import CreateAccountScreen from '../components/auth/CreateAccountScreen';
import LoginScreen from '../components/auth/LoginScreen';
const AuthRouter = () => {
    return (
        <Switch>
            <Route exact path='/auth/login' component={LoginScreen}/>
            <Route exact path='/auth/register' component={CreateAccountScreen}/>
            <Redirect to='/'/>
        </Switch>
    )
}

export default AuthRouter
