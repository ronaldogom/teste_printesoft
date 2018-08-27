import {SUCESSO_LOGIN_ADMIN, SUCESSO_LOGOUT_ADMIN} from "../actions";

export default function (state = false, action) {

    switch (action.type)
    {
        case SUCESSO_LOGIN_ADMIN:

            let usuario = action.payload.data.usuario;

            if(usuario != null)
            {
                localStorage.setItem('token', usuario.token);
                localStorage.setItem('permissao', 'admin');
                return true;
            }

            alert(action.payload.data.mensagem);

            return false;

        case SUCESSO_LOGOUT_ADMIN:

            localStorage.clear();

            alert("Logout realizado com sucesso.");

            return false;

        default:
            return state;
    }
}
