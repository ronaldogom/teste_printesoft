import React, {Component} from 'react';
import LoginForm from '../common/LoginForm';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class LoginScene extends Component{

    verifica_sessao()
    {
        if(localStorage.getItem('token'))
        {
            if(localStorage.getItem('permissao') === 'usuario')
                return <Redirect to="/usuario/bemvindo"/>

            if(localStorage.getItem('permissao') === 'admin')
                return <Redirect to="/admin/dashboard"/>
        }
        else
        {
            return (
                <div>
                    <div style={{marginTop: '10px', position: 'absolute', right: '20px'}}>
                        <Link to="/admin/entrar">Acesso de administrador</Link>
                    </div>
                    <LoginForm/>
                </div>);
        }
    }

    redireciona_usuario()
    {
        if(this.props.usuario_login)
        {
            return <Redirect to="/usuario/bemvindo"/>
        }
    }

    render()
    {
        return(
            <div className="container">
                {this.verifica_sessao()}
                {this.redireciona_usuario()}
            </div>
        );
    }
}

function mapStateToProps({usuario_login})
{
    return{usuario_login};
}

export default connect(mapStateToProps)(LoginScene);
