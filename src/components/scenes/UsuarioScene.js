import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {usuario_sair} from '../../actions';

class LoginScene extends Component{

    renderConteudo()
    {
        console.log(this.props.usuario_login);
        if(localStorage.getItem('token') && localStorage.getItem('permissao') === 'usuario')
        {
            return(
                <div>
                    <button className="btn" onClick={this.props.usuario_sair} style={{position: 'absolute', right: '20px', marginTop: '10px'}}>Sair</button>

                    <div className="center">
                        <strong>Bem vindo</strong>
                    </div>
                </div>
            );
        }

        return <Redirect to='/'/>;

    }

    verificaAuth()
    {
        console.log(this.props.usuario_login);
        if(!this.props.usuario_login)
            return <Redirect to='/'/>;
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

function mapStateToProps({usuario_login})
{
    return {usuario_login};
}

export default connect(mapStateToProps, {usuario_sair})(LoginScene);
