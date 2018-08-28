import {combineReducers} from 'redux';
import UsuarioLoginReducer from "./UsuarioLoginReducer";
import AdminLoginReducer from "./AdminLoginReducer";
import CadastroReducer from "./CadastroReducer";
import CadastroUniversidadeReducer from "./CadastroUniversidadeReducer";
import UniversidadesReducer from './UniversidadesReducer';
import UsuariosReducer from './UsuariosReducer';
import VinculoUniversidadeReducer from './VinculoUniversidadeReducer';

const reducers = combineReducers({
    usuario_login: UsuarioLoginReducer,
    admin_login: AdminLoginReducer,
    cadastro_sucesso: CadastroReducer,
    cadastro_universidade_sucesso: CadastroUniversidadeReducer,
    lista_universidades: UniversidadesReducer,
    lista_usuarios: UsuariosReducer,
    sucesso_vinculo_universidade: VinculoUniversidadeReducer
});

export default reducers;
