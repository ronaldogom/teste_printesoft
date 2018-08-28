import {SUCESSO_CADASTRO_UNIVERSIDADE, RESET_CADASTRO_UNIVERSIDADE} from "../actions";

export default function (state = false, action) {

    switch (action.type)
    {
        case SUCESSO_CADASTRO_UNIVERSIDADE:
            alert(action.payload.data.mensagem);
            return true;
        case RESET_CADASTRO_UNIVERSIDADE:
            return false;
        default:
            return false;
    }
}
