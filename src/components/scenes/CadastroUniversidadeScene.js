import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import CadastroUniversidadeForm from '../common/CadastroUniversidadeForm';

class CadastroUniversidadeScene extends Component{
    renderConteudo()
    {
        if(localStorage.getItem('token') && localStorage.getItem('permissao') === 'admin')
        {
            return(
                <div style={{width: '100%'}}>
                    <div style={{width: '100%', height: '74px'}}>
                        <button className="btn" onClick={this.props.admin_sair} style={{margin: '20px', float: 'right'}}>Sair</button>
                    </div>
                    <CadastroUniversidadeScene/>
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
            </div>
        );
    }
}

function mapStateToProps({admin_login})
{
    return {admin_login};
}

export default connect(mapStateToProps)(CadastroUniversidadeScene);
