import React, {Component} from 'react';
import CadastroForm from '../common/CadastroForm';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class LoginScene extends Component{
    constructor(props){
        super(props);

        this.redirecionaLogin = this.redirecionaLogin.bind(this);
    }

    redirecionaLogin()
    {
        if(this.props.cadastro_sucesso)
            return <Redirect to="/login"/>;
    }

    render()
    {
        return(
            <div className="container" style={{position: 'relative', padding: '0'}}>
                <CadastroForm/>
                {this.redirecionaLogin()}
            </div>
        );
    }
}

function mapStateToProps({cadastro_sucesso})
{
    return {cadastro_sucesso};
}

export default connect(mapStateToProps)(LoginScene);
