import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {admin_sair, listar_universidades, listar_usuarios, atualizar_status_usuario, vincular_universidades} from '../../actions';
import _ from 'lodash';
import Modal from 'react-modal';

const customStyles = {
    content : {
        alignX      : 'center',
        width       : '300px',
        top         : '50%',
        left        : '50%',
        right       : 'auto',
        bottom      : 'auto',
        marginRight : '-50%',
        transform   : 'translate(-50%, -50%)'
    }
  };

let universidades = [];
let usuario_aux = null;

class VisualizarRequisicoesScene extends Component{



    constructor() {
        super();

        this.state = {
            modalStatusIsOpen: false,
            modalUniversidadesIsOpen: false,
            universidades: []
        };

        this.openStatusModal = this.openStatusModal.bind(this);
        this.closeStatusModal = this.closeStatusModal.bind(this);
        this.openUniversidadesModal = this.openUniversidadesModal.bind(this);
        this.closeUniversidadesModal = this.closeUniversidadesModal.bind(this);
        this.alterarStatus = this.alterarStatus.bind(this);
        this.vincularUniversidades = this.vincularUniversidades.bind(this);
    }

    openStatusModal(usuario) {
        this.setState({modalStatusIsOpen: true});
        this.usuario_aux = usuario;
    }

    closeStatusModal() {
        this.setState({modalStatusIsOpen: false});
    }

    openUniversidadesModal() {
        this.setState({modalUniversidadesIsOpen: true});
    }

    closeUniversidadesModal() {
        if(this.props.sucesso_vinculo_universidade);

        this.setState({modalUniversidadesIsOpen: false});
    }

    componentWillReceiveProps()
    {
        if(this.props.lista_usuarios)
            this.closeStatusModal();
            this.closeUniversidadesModal();
    }

    componentDidMount(props)
    {
        let formData = new FormData();
        formData.append('token', localStorage.getItem('token'));

        this.props.listar_universidades(formData);
        this.props.listar_usuarios(formData);
    }

    alterarStatus(event)
    {
        let formData = new FormData();
        
        formData.append('token', localStorage.getItem('token'));
        formData.append('usuario_id', this.usuario_aux.id);
        formData.append('novo_status', event.target.id);

        this.props.atualizar_status_usuario(formData);
    }

    renderRequisicoes()
    {
        if(_.map(this.props.lista_usuarios).length > 0)
        {
            return _.map(this.props.lista_usuarios, usuario =>{
                return(
                    <li className="list-group-item " key={usuario.id} onClick={() => usuario_aux = usuario.id} style={{marginBottom: '20px'}}>
                        <div style={{borderBottom: '1px solid grey', position: 'relative'}}>
                            <p>Nome: {usuario.nome}</p>
                            <p>Email: {usuario.email}</p>
                            <p>Telefone: {usuario.telefone}</p>
                            <p style={{position: 'absolute', right: '1px', top: '1px'}}>Status: {usuario.status}</p>
                        </div>
                        <div>
                            <button type="button" className="btn btn-primary" onClick={this.openUniversidadesModal} style={{marginTop: '10px', marginRight: '20px'}}> Vincular Universidades </button>
                            <button type="button" className="btn btn-primary btn-warning" onClick={this.openStatusModal} style={{marginTop: '10px'}}> Alterar Status </button>
                        </div>
                    </li>
                );
            });
        }
        else
        {
            return (
                <div className="center">
                    <h2>Nenhuma requisição no momento</h2>
                </div>
            );
        }
    }

    selecionarUniversidade(event)
    {
        let universidade_id = event.target.value;

        if(universidades.indexOf(universidade_id) > -1)
        {
            let index = universidades.indexOf(universidade_id);
            universidades.splice(index, 1);
        }
        else
        {
            universidades.push(universidade_id);
        }
    }

    renderUniversidades()
    {
        if(_.map(this.props.lista_universidades).length > 0)
        {
            return _.map(this.props.lista_universidades, universidade =>{
                return(
                    <li className="list-group-item " key={universidade.id}>
                        <label className="checkbox-inline">
                            <input type="checkbox" value={universidade.id} onChange={this.selecionarUniversidade}/> Universidade: {universidade.nome}
                        </label>
                    </li>
                );
            });
        }
        else
        {
            return(
                <div className="col-md-12" style={{display: 'flex', justifyContent: 'center', marginTop: '200px', height: '100%'}}>
                    <h3>Nenhuma requisição pendente</h3>
                </div>
            );
        }
    }

    vincularUniversidades()
    {
        let formData = new FormData();
        
        formData.append('token', localStorage.getItem('token'));
        formData.append('usuario_id', usuario_aux);
        formData.append('universidades', JSON.stringify(universidades));

        console.log(JSON.stringify(universidades));

        this.props.vincular_universidades(formData);
    }

    verificaAuth()
    {
        if(!this.props.admin_login)
            return <Redirect to="/admin/entrar"/>;
    }

    render()
    {
        return(
            <div className="container">
                <Modal
                isOpen={this.state.modalStatusIsOpen}
                onRequestClose={this.closeStatusModal}
                style={customStyles}>
                    <h4 ref={subtitle => this.subtitle = subtitle} style={{marginBottom: '20px', textAlign: 'center'}}>Selecione um novo status</h4>
                    <div style={{width: '100%'}}>
                        <button id="aceito" className="btn btn-primary" style={{width: '100%', marginRight: '10px', marginBottom: '10px'}} onClick={this.alterarStatus} >Aceito</button>
                        <button id="pendente" className="btn btn-primary btn-warning" style={{width: '100%', marginRight: '10px', marginBottom: '10px'}} onClick={this.alterarStatus} >Pendente</button>
                        <button id="negado" className="btn btn-primary btn-danger" style={{width: '100%', marginRight: '10px', marginBottom: '10px'}} onClick={this.alterarStatus} >Negado</button>
                    </div>
                </Modal>

                <Modal
                isOpen={this.state.modalUniversidadesIsOpen}
                onRequestClose={this.closeUniversidadesModal}
                style={customStyles}>
                    <h4 ref={subtitle => this.subtitle = subtitle} style={{marginBottom: '20px', textAlign: 'center'}}>Vincular Universidades</h4>
                    <ul style={{width: '100%', padding: '0px', maxHeight: '300px', overflowY: 'scroll'}}>
                        {this.renderUniversidades()}
                    </ul>
                    <button id="aceito" className="btn btn-primary" style={{width: '100%'}} onClick={this.vincularUniversidades} >Confirmar</button>
                </Modal> 
                
                <h3 style={{marginTop: '10%', marginLeft: '20px'}}>Requisições pendentes</h3>
                
                <ul className="list-group" style={{padding: '20px'}}>
                    {this.renderRequisicoes()}
                    {this.verificaAuth()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({admin_login, lista_universidades, lista_usuarios, sucesso_vinculo_universidade})
{
    return {admin_login, lista_universidades, lista_usuarios, sucesso_vinculo_universidade};
}

export default connect(mapStateToProps, {admin_sair, listar_universidades, listar_usuarios, atualizar_status_usuario, vincular_universidades})(VisualizarRequisicoesScene);
