import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

import RegisterForm from './components/RegisterForm.js';

class App extends React.Component {
    state = {};

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path={"/register"}
                               render={routeProps => <RegisterForm  {...routeProps}/>}
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
