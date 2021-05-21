import React, { Component } from "react";


class LoginForm extends Component {

    state = {
        account: {
            username: "", password: ""
        },
        errors: {}
    };

    validate = () => {
        const errors = {};

        const { account } = this.state;
        if (account.username.trim() === '') {
            errors.username = 'Username is required!';
        }
        if (account.password.trim() === '') {
            errors.password = 'Password is required!';
        }

        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        console.log("submit - np. zapytanie do serwera");
    };

    handleChange = (event) => {
        const account = { ...this.state.account };
        account[event.currentTarget.name] = event.currentTarget.value;
        this.setState({ account });
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Email address</label>
                        <input value={this.state.account.username}
                            name="username"
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            id="username"
                            aria-describedby="emailHelp"
                            placeholder="Username" />
                        {this.state.errors.username &&
                            <div className="alert alert-danger">{this.state.errors.username}</div>}

                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input value={this.state.account.password}
                            name="password"
                            onChange={this.handleChange}
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password" />
                        {this.state.errors.password &&
                            <div className="alert alert-danger">{this.state.errors.password}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;