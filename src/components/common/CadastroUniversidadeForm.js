import React, {Component} from 'react';
import {cadastrar_universidade} from "../../actions";
import {connect} from 'react-redux';

class CadastroUniversidadeScene extends Component{


    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let formData = new FormData();

        console.log(this.nome.value, this.endereco.value, this.cidade.value,this.bairro.value,this.estado.value);

        formData.append('nome', this.nome.value);
        formData.append('endereco', this.endereco.value);
        formData.append('cidade', this.cidade.value);
        formData.append('bairro', this.bairro.value);
        formData.append('estado', this.estado.value);
        formData.append('token', localStorage.getItem('token'));

        this.props.cadastrar_universidade(formData);
    }

    render(){
        return(
            <div>
                <div style={{textAlign: 'center'}}>
                    <strong>Cadastrar Nova Universidade</strong>
                </div>
                <form className="form-group row center" style={{height: 'auto', margin: '0'}} onSubmit={this.handleSubmit}>
                    <div className="col-sm-1 form-input">
                        <label style={{color: '#001c84'}}>Nome</label>
                        <input className="form-control" placeholder='Nome' type="text" id="nome-input" ref={(input) => this.nome = input}/>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-sm-1 form-input">
                        <label style={{color: '#001c84'}}>Endereço</label>
                        <input className="form-control" placeholder='Endereço' type="text" id="endereco-input" ref={(input) => this.endereco = input}/>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-sm-1 form-input">
                        <label style={{color: '#001c84'}}>Cidade</label>
                        <input className="form-control" placeholder='Cidade' type="text" id="cidade-input" ref={(input) => this.cidade = input}/>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-sm-1 form-input">
                        <label style={{color: '#001c84'}}>Bairro</label>
                        <input className="form-control" placeholder='Bairro' type="text" id="bairro-input" ref={(input) => this.bairro = input}/>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-sm-1 form-input">
                        <label style={{color: '#001c84'}}>Estado</label>
                        <input className="form-control" placeholder='Estado' type="text" id="senha-input" ref={(input) => this.estado = input}/>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-sm-12">
                        <button className="btn btn-primary" type="submit" style={{width: '100%', marginBottom: '10px'}}><strong>Confirmar</strong></button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, {cadastrar_universidade})(CadastroUniversidadeScene);
