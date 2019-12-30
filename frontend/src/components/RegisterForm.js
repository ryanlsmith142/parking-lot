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


    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type='text'
                        value={this.state.username}
                        onChange={this.registerButton}
                    />
                    <input
                        type='text'
                        value={this.state.password}
                        onChange={this.registerButton}
                    />
                    <input
                        type='text'
                        value={this.state.email}
                        onChange={this.registerButton}
                    />
                    <input
                        type='text'
                        value={this.state.firstName}
                        onChange={this.registerButton}
                    />
                    <input
                        type='text'
                        value={this.state.lastName}
                        onChange={this.registerButton}
                    />
                    <input
                        type='submit'
                    />
                </form>
            </div>
        )
    }
}

export default RegisterForm
