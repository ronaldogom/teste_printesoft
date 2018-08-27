import {SUCESSO_CADASTRO_UNIVERSIDADE} from "../actions";

export default function (state = false, action) {

    switch (action.type)
    {
        case SUCESSO_CADASTRO_UNIVERSIDADE:
            alert(action.payload.data.mensagem);
            return true;
        default:
            return false;
    }
}
