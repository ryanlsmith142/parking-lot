import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

import RegisterForm from './components/RegisterForm.js';
import CreateShowQuestion from "./components/CreateShowQuestion";

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path={"/register"}
                               render={routeProps => <RegisterForm  {...routeProps}/>}
                        />
                        <Route path={"/1/users-questions"}
                               render={routeProps => <CreateShowQuestion {...routeProps}/>}
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
