import React, {Component} from 'react';
import AdminLoginForm from '../common/AdminLoginForm';
import {Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';

class AdminLoginScene extends Component{

    verifica_sessao()
    {
        console.log(localStorage.getItem('token'));
        if(localStorage.getItem('token'))
        {
            if(localStorage.getItem('permissao') === 'admin')
                return <Redirect to="/admin/dashboard"/>
        }
        else
        {
            return (
                <div>
                    <div style={{marginTop: '10px', position: 'absolute', right: '20px'}}>
                        <Link to="/">Acesso de usuario</Link>
                    </div>
                    <AdminLoginForm/>
                </div>);
        }
    }

    redireciona_usuario()
    {
        console.log(this.props.admin_login);
        if(this.props.admin_login)
        {
            return <Redirect to="/admin/dashboard"/>
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

function mapStateToProps({admin_login})
{
    return({admin_login});
}

export default connect(mapStateToProps)(AdminLoginScene);
