import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import {admin_sair, reset_cadastro_universidade_reducer} from '../../actions';


class LoginScene extends Component{

    componentWillMount(props)
    {
        this.props.reset_cadastro_universidade_reducer();
    }

    renderConteudo()
    {
        if(localStorage.getItem('token') && localStorage.getItem('permissao') === 'admin')
        {
            return(
                <div style={{width: '100%'}}>
                    <div style={{width: '100%', height: '74px'}}>
                        <button className="btn" onClick={this.props.admin_sair} style={{margin: '20px', float: 'right'}}>Sair</button>
                    </div>

                    <div className="row" style={{marginLeft: '20px', marginRight: '20px'}}>
                        <div className="col-md-5 col-sm-5 col-12" style={{height: '100px', marginBottom: '20px', padding: '0px'}}>
                            <Link to="/admin/dashboard/cadastrar_universidade" className="btn btn-primary" style={{width: '100%', height: '100%', backgroundColor: '#283593'}}>
                                <strong className="center">Cadastrar Unviersidade</strong>
                            </Link>
                        </div>
                        <div className="col-md-5 col-sm-5 col-12" style={{height: '100px', padding: '0px'}}>
                            <Link className="btn btn-primary" to="/admin/dashboard/visualizar_requisicoes" style={{width: '100%', height: '100%', backgroundColor: '#bf360c'}}>
                                <strong className="center">Visualizar Requisições</strong>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }

        return <Redirect to='/admin/entrar'/>;
    }

    verificaAuth()
    {
        if(!this.props.admin_login)
            return <Redirect to='/admin/entrar'/>;
    }

    render()
    {
        return(
            <div className="container">
                {this.renderConteudo()}
                {this.verificaAuth()}
            </div>
        );
    }
}

function mapStateToProps({admin_login})
{
    return {admin_login};
}

export default connect(mapStateToProps, {admin_sair, reset_cadastro_universidade_reducer})(LoginScene);
