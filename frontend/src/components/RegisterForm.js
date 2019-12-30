import React from 'react';

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

    registerButton = event => {
        event.preventDefault();

        this.setState({value: event.target.value})


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
                            onChange={this.registerButton}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type='text'
                            value={this.state.password}
                            onChange={this.registerButton}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type='text'
                            value={this.state.email}
                            onChange={this.registerButton}
                        />
                    </label>
                    <label>
                        First Name:
                        <input
                            type='text'
                            value={this.state.firstName}
                            onChange={this.registerButton}
                        />
                    </label>
                    <label>
                        Last Name:
                        <input
                            type='text'
                            value={this.state.lastName}
                            onChange={this.registerButton}
                        />
                    </label>
                    <input
                        type='submit'
                    />
                </form>
            </div>
        )
    }
}

export default RegisterForm
