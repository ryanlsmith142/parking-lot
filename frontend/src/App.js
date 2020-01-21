import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import ParkingLotDashboard from './components/ParkingLotDashboard.js';
import RegisterForm from './components/RegisterForm.js';

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path={"/register"}
                               render={routeProps => <RegisterForm  {...routeProps}/>}
                        />
                        <Route path={"/1/parkingLotDashboard"}
                               render={routeProps => <ParkingLotDashboard {...routeProps}/>}
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
