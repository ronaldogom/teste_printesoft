import {SUCESSO_LOGIN_USUARIO, SUCESSO_LOGOUT_USUARIO} from "../actions";

export default function (state = false, action) {

    switch (action.type)
    {
        case SUCESSO_LOGIN_USUARIO:
            alert(action.payload.data.mensagem);

            let usuario = action.payload.data.usuario;

            if(usuario.permitido)
            {
                localStorage.setItem('token', usuario.token);
                localStorage.setItem('permissao', 'usuario');
                return true;
            }

            return state;

        case SUCESSO_LOGOUT_USUARIO:

            localStorage.clear();

            alert("Logout realizado com sucesso.");

            return false;

        default:
            return state;
    }
}
