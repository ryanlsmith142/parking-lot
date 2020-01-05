import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

import RegisterForm from './components/RegisterForm.js';
import CreateShowQuestion from "./components/CreateShowQuestion";
import axios from "axios";

class App extends React.Component {

    componentDidMount() {
        axios.get(`/api/1/users-questions`)
            .then( res => {
                const question = res.data;
                console.log(question);
                return question;
            });
    }

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
