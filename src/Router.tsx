import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Login } from './login/login';
import { Register } from './register/register';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/'>
                    <Login />
                </Route>
                <Route path='/register'>
                    <Register />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
