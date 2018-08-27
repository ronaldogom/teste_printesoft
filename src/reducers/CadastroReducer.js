import {SUCESSO_CADASTRO} from "../actions";

export default function (state = false, action) {

    switch (action.type)
    {
        case SUCESSO_CADASTRO:
            alert(action.payload.data.mensagem);
            return true;
        default:
            return state;
    }
}
