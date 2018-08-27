import React, {Component} from 'react';
import {cadastrar} from "../../actions";
import {connect} from 'react-redux';

class CadastroUniversidadeScene extends Component{


    render(){
        return(
            <form className="form-group row center" style={{height: 'auto', margin: '0'}} onSubmit={this.handleSubmit}>

            </form>
        );
    }
}

export default connect(null, {cadastrar})(CadastroUniversidadeScene);
