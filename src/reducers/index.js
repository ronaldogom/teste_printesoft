import {combineReducers} from 'redux';
import UsuarioLoginReducer from "./UsuarioLoginReducer";
import AdminLoginReducer from "./AdminLoginReducer";
import CadastroReducer from "./CadastroReducer";
import CadastroUniversidadeReducer from "./CadastroUniversidadeReducer";

const reducers = combineReducers({
    usuario_login: UsuarioLoginReducer,
    admin_login: AdminLoginReducer,
    cadastro_sucesso: CadastroReducer,
    cadastro_universidade_sucesso: CadastroUniversidadeReducer
});

export default reducers;
