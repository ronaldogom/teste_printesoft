import {SUCESSO_VINCULAR_UNIVERSIDADE} from "../actions";

export default function (state = false, action) {

    switch (action.type)
    {
        case SUCESSO_VINCULAR_UNIVERSIDADE:
            alert(action.payload.data.mensagem);
            return true;
        default:
            return state;
    }
}
