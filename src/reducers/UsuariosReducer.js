import {SUCESSO_LISTAR_USUARIOS, SUCESSO_ATUALIZAR_STATUS} from "../actions";
import _ from 'lodash';

export default function (state = [], action) {

    switch (action.type)
    {
        case SUCESSO_LISTAR_USUARIOS:
            //console.log(action.payload.data.usuarios);

            return _.mapKeys(action.payload.data.usuarios, 'created_at');
        case SUCESSO_ATUALIZAR_STATUS:
            alert(action.payload.data.mensagem);
            var newState = {...state};
            newState[action.payload.data.usuario.created_at] = action.payload.data.usuario;

            return newState;
        default:
            return state;
    }
}
