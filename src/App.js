import React, { Component } from "react";
import Login from "./components/Login";
import Admin from "./components/Admin";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    };
  }

  //* Login
  checkLogin() {
    if (this.state.login) {
      return <Admin />;
    }
    return <Login checkAdmin={(account) => this.checkAdmin(account)} />;
  }

  checkAdmin(account) {
    if (account.username !== "admin") {
      alert("Tài khoản không tồn tại!");
    } else if (account.password !== "abc123") {
      alert("Sai mật khẩu!");
    } else {
      alert("Đăng nhập thành công!");
      this.setState({
        login: true,
      });
    }
  }

  render() {
    return (
      <div className="App">
        {this.checkLogin()}
      </div>
    )
  }
}

export default App;