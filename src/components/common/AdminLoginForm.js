import React, {Component} from 'react';
import {admin_login} from "../../actions";
import {connect} from 'react-redux';

class AdminLoginForm extends Component{

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let formData = new FormData();

        formData.append('email', this.email.value);
        formData.append('senha', this.senha.value);

        this.props.admin_login(formData);
    }

    render(){
        return(
            <form className="form-group row center" style={{height: 'auto', margin: '0'}} onSubmit={this.handleSubmit}>
                <div className="col-sm-12 form-input">
                    <label style={{color: '#001c84'}}>Email</label>
                    <input className="form-control" placeholder='Email' type="text" id="email-input" ref={(input) => this.email = input}/>
                </div>
                <div className="w-100"></div>
                <div className="col-sm-12 form-input">
                    <label style={{color: '#001c84'}}>Senha</label>
                    <input className="form-control" placeholder='Senha' type="password" id="senha-input" ref={(input) => this.senha = input}/>
                </div>
                <div className="w-100"></div>
                <div className="col-sm-12">
                    <button className="btn btn-primary" type="submit" style={{width: '100%', marginBottom: '10px'}}><strong>Entrar</strong></button>
                </div>
            </form>
        );
    }
}

export default connect(null, {admin_login})(AdminLoginForm);
