import {combineReducers} from 'redux';
import UsuarioLoginReducer from "./UsuarioLoginReducer";
import AdminLoginReducer from "./AdminLoginReducer";
import CadastroReducer from "./CadastroReducer";

const reducers = combineReducers({
    usuario_login: UsuarioLoginReducer,
    admin_login: AdminLoginReducer,
    cadastro_sucesso: CadastroReducer
});

export default reducers;
