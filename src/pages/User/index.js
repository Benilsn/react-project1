import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import './User.css';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                username: "",
                password: "",
            }
        }

        this.login = this.login.bind(this);
        this.dataForm = this.dataForm.bind(this);
    }

    dataForm(e) {
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({ form: form });
    }

    login(e) {

        var username = this.state.form.username;
        var password = this.state.form.password;

        if (username !== '' && password !== '') {
            alert(`Username: ${username}\nPassword:${password}`)
        } else {
            this.setState({ error: "Eroooou!" })
        }

        e.preventDefault();
    }

    render() {
        return (
            <>
                <NavBar />

                <div class="login-div">
                    <form onSubmit={this.login}>
                        <h1 class="login-div">Sign in</h1>
                        <p class="login-div">Username :</p><input type="text"
                            class="login-div" name="username"
                            value={this.state.form.username}
                            onChange={this.dataForm} placeholder="Username" />
                        <br />
                        <p class="login-div" >Password :</p><input type="password"
                            class="login-div" name="password"
                            value={this.state.form.password}
                            onChange={this.dataForm} placeholder="Password" />
                        <button class="login-div" type="submit">Confirm</button>
                    </form>
                </div>

                <Footer />
            </>
        )
    }

}

export default User;