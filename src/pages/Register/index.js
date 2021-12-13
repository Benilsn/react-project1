import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import './Register.css';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                firstname: '',
                lastname: '',
                age: '',
                email: "",
                username: "",
                password: ""
            }
        }

        this.register = this.register.bind(this);
        this.dataForm = this.dataForm.bind(this);
    }

    dataForm(e){
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({form:form})
    }

    register(e){

        const firstname = this.state.form.firstname;

        alert(firstname);

        e.preventDefault();
    }

    render() {
        return (
            <>
                <NavBar />

                <div class="register-div">
                    <h1 class="register-div">Register</h1>
                    <form onSubmit={this.register}>
                        <label class="register-div">First Name :</label>
                        <input type="text" class="register-div" name="firstname" 
                        value={this.state.form.firstName}
                        onChange={this.dataForm}
                        placeholder='First Name'></input>
                        <br />
                        <br />

                        <label class="register-div" >Last Name :</label>
                        <input type="text" class="register-div" name="lastname" 
                        value={this.state.form.lastName}
                        onChange={this.dataForm}
                        placeholder='Last Name'></input>
                        <br />
                        <br />

                        <label class="register-div">Age :</label>
                        <input type="text" class="register-div" name="age" 
                        value={this.state.form.age}
                        onChange={this.dataForm}
                        placeholder='Age'></input>
                        <br />
                        <br />
                        <label class="register-div">E-mail :</label>
                        <input type="email" class="register-div" name="email" 
                        value={this.state.form.email}
                        onChange={this.dataForm}
                        placeholder='E-mail'></input>
                        <br />
                        <br />

                        <label class="register-div">Username :</label>
                        <input type="text" class="register-div" name="username" 
                        value={this.state.form.username}
                        onChange={this.dataForm}
                        placeholder='Username'></input>
                        <br />
                        <br />

                        <label class="register-div">Password :</label>
                        <input type="password" class="register-div" name="password" 
                        value={this.state.form.password}
                        onChange={this.dataForm}
                        placeholder='Password'></input>

                        <button class="register-div" type="submit">Submit</button>
                    </form>

                </div>

                <Footer />

            </>
        )
    }
}

export default Register;