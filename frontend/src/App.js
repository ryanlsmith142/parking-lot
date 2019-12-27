import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    state = {};

    componentDidMount() {
        setInterval(this.hello, 250);
    }

    hello = () => {
        fetch('api/hello')
            .then(response => response.text())
            .then(message => {
                this.setState({message: message});
            });
    };

    render() {
        return (
            <div className="app">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{ this.state.message }</h1>
                </header>
                <p className="App-intro">
                    Edit <code>src/App.js</code> and save to reload.
                </p>

            </div>
        )
    }
}

export default App;
