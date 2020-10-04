import React, { Component } from 'react';
import "../css/Login.css";

class Login extends Component {
    handleChange(e) {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let account = {
            username: this.state.username.toLowerCase(),
            password: this.state.password.toLowerCase()
        }
        this.props.checkAdmin(account);
    }

    render() {
        return (
            <div className="login">
                <form className="login_form" onSubmit={(e) => this.handleSubmit(e)}>
                    <h1>Lớp Anh Đạt</h1>
                    <div className="input-group">
                        <input name="username" type="text" id="username" onChange={(e) => this.handleChange(e)} autoComplete="Off" required/>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="input-group">
                        <input name="password" type="password" id="password" onChange={(e) => this.handleChange(e)} autoComplete="Off" required/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;