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

    setStateToNewUserInfo = type => event => {
        event.preventDefault();
        this.setState({[type]: event.target.value})
    };

    registerUser = () => {
        axios.post("/api/register", `email=${this.state.email}
                                                &password=${this.state.password}
                                                &username=${this.state.username}
                                                &firstName=${this.state.firstName}
                                                &lastName=${this.state.lastName}`);
        console.log("hello from registerUser()")
    };

    render() {
        return (
            <div>
                <form>
                    <label>
                        Username:
                        <input
                            type={"username"}
                            name={"username"}
                            onChange={this.setStateToNewUserInfo("username")}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type={'password'}
                            name={'password'}
                            onChange={this.setStateToNewUserInfo('password')}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type={'email'}
                            name={'email'}
                            onChange={this.setStateToNewUserInfo('email')}
                        />
                    </label>
                    <label>
                        First Name:
                        <input
                            type={'firstName'}
                            name={'firstName'}
                            onChange={this.setStateToNewUserInfo('firstName')}
                        />
                    </label>
                    <label>
                        Last Name:
                        <input
                            type={'lastName'}
                            name={'lastName'}
                            onChange={this.setStateToNewUserInfo('lastName')}
                        />
                    </label>
                    <input
                        type='submit'
                        onClick={this.registerUser}
                    />
                </form>
            </div>
        )
    }
}

export default RegisterForm
