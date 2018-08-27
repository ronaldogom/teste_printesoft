import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {admin_sair} from '../../actions';

class VisualizarRequisicoesScene extends Component{

    renderConteudo()
    {
        if(localStorage.getItem('token') && localStorage.getItem('permissao') === 'admin')
        {
            return(
                <div style={{width: '100%', height: '200px', backgroundColor: 'grey'}}>

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

export default connect(mapStateToProps, {admin_sair})(VisualizarRequisicoesScene);
