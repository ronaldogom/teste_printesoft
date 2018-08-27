import React, {Component} from 'react';
import {cadastrar} from "../../actions";
import {connect} from 'react-redux';

class CadastroForm extends Component{

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let formData = new FormData();

        formData.append('nome', this.nome.value);
        formData.append('email', this.email.value);
        formData.append('senha', this.senha.value);
        formData.append('telefone', this.telefone.value);

        this.props.cadastrar(formData);
    }

    render(){
        return(
            <form className="form-group row center" style={{height: 'auto', margin: '0'}} onSubmit={this.handleSubmit}>
                <div className="col-sm-1 form-input">
                    <label style={{color: '#001c84'}}>Nome</label>
                    <input className="form-control" placeholder='Nome' type="text" id="email-input" ref={(input) => this.nome = input}/>
                </div>
                <div className="w-100"></div>
                <div className="col-sm-1 form-input">
                    <label style={{color: '#001c84'}}>Email</label>
                    <input className="form-control" placeholder='Email' type="text" id="senha-input" ref={(input) => this.email = input}/>
                </div>
                <div className="w-100"></div>
                <div className="col-sm-1 form-input">
                    <label style={{color: '#001c84'}}>Senha</label>
                    <input className="form-control" placeholder='Senha' type="password" id="senha-input" ref={(input) => this.senha = input}/>
                </div>
                <div className="w-100"></div>
                <div className="col-sm-1 form-input">
                    <label style={{color: '#001c84'}}>Telefone</label>
                    <input className="form-control" placeholder='Telefone' type="text" id="senha-input" ref={(input) => this.telefone = input}/>
                </div>
                <div className="w-100"></div>
                <div className="col-sm-12">
                    <button className="btn btn-primary" type="submit" style={{width: '100%', marginBottom: '10px'}}><strong>Confirmar</strong></button>
                </div>
            </form>
        );
    }
}

export default connect(null, {cadastrar})(CadastroForm);
