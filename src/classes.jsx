import React, { Component } from "react";

class Teste extends Component {

    render(){
        return (
            <div>
                <h2>Ola </h2>
                <h1>{this.state.firtName}</h1>
            </div>
        )
    }


    constructor(props){
        super(props)
        this.state = {
            firtName: "Juse",
            lastName: "",
            age: 0,
            emai:"",
            userName:"",
            userPassword:""
        }
    }

    
}

export default Teste;