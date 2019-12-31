import React from 'react';
import axios from 'axios';

class RegisterForm extends React.Component {
    state = {
        username: '',
        password: '',
        email: '',
        isAdmin: false,
        profilePic: '',
        firstName: '',
        lastName: ''
    };

    setStateToNewUserInfo = event => {
        event.preventDefault();
        this.setState({value: event.target.value})
    };

    registerUser = () => {
        axios.post("/api/register", `email=${this.state.email}
                                                &password=${this.state.password}
                                                &userName=${this.state.username}
                                                &firstName=${this.state.firstName}
                                                &lastName=${this.state.lastName}`)
    };

    render() {
        return (
            <div>
                <form>
                    <label>
                        Username:
                        <input
                            type='text'
                            value={this.state.username}
                            onChange={this.setStateToNewUserInfo}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type='text'
                            value={this.state.password}
                            onChange={this.setStateToNewUserInfo}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type='text'
                            value={this.state.email}
                            onChange={this.setStateToNewUserInfo}
                        />
                    </label>
                    <label>
                        First Name:
                        <input
                            type='text'
                            value={this.state.firstName}
                            onChange={this.setStateToNewUserInfo}
                        />
                    </label>
                    <label>
                        Last Name:
                        <input
                            type='text'
                            value={this.state.lastName}
                            onChange={this.setStateToNewUserInfo}
                        />
                    </label>
                    <input
                        type='submit'
                        onChange={this.registerUser}
                    />
                </form>
            </div>
        )
    }
}

export default RegisterForm
