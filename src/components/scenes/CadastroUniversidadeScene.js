import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import CadastroUniversidadeForm from '../common/CadastroUniversidadeForm';

class CadastroUniversidadeScene extends Component{

    redirecionaDashboard()
    {
        console.log(this.props.cadastro_universidade_sucesso);
        if(this.props.cadastro_universidade_sucesso)
        {
            return <Redirect to="/admin/dashboard"/>;
        }
    }

    renderConteudo()
    {
        if(localStorage.getItem('token') && localStorage.getItem('permissao') === 'admin')
        {
            return(
                <div style={{width: '100%'}}>
                    <CadastroUniversidadeForm/>
                </div>
            );
        }
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
                {this.redirecionaDashboard()}
            </div>
        );
    }
}

function mapStateToProps({admin_login, cadastro_universidade_sucesso})
{
    return {admin_login, cadastro_universidade_sucesso};
}

export default connect(mapStateToProps)(CadastroUniversidadeScene);
