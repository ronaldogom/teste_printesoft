import axios from 'axios';

export const SUCESSO_LOGIN_USUARIO = 'sucesso_login_usuario';
export const SUCESSO_LOGOUT_USUARIO = 'sucesso_logout_usuario';
export const SUCESSO_CADASTRO_UNIVERSIDADE = 'sucesso_cadastro_universidade';
export const SUCESSO_LOGIN_ADMIN = 'sucesso_login_admin';
export const SUCESSO_LOGOUT_ADMIN = 'sucesso_logout_admin';
export const ERRO_LOGIN = 'error_login';
export const SUCESSO_CADASTRO = 'sucesso_cadastro';
export const ERRO_CADASTRO = 'erro_cadastro';

const BASE_URL_PRODUCAO = 'http://localhost/teste_freelance/public/api';

// MÉTODOS USUARIO--------------------------------------------------------------------------------------------------------
export function usuario_login(values) {
    const request = axios.post(`${BASE_URL_PRODUCAO}/usuario/entrar`, values);

    return (dispatch) => {
        request.then((response) => {
            dispatch({
                type: SUCESSO_LOGIN_USUARIO,
                payload: response
            });
        }).catch((error) => {
            console.log(error);
            dispatch({
                type: ERRO_LOGIN,
                payload: error.response.data
            });
        });
    };
}

export function usuario_sair()
{
    return {
        type: SUCESSO_LOGOUT_USUARIO,
        payload: ''
    };
}

export function cadastrar(values) {
    const request = axios.post(`${BASE_URL_PRODUCAO}/usuario/cadastrar` , values);

    return (dispatch) => {
        request.then((response) => {
            dispatch({
                type: SUCESSO_CADASTRO,
                payload: response
            });
        }).catch((error) => {
            dispatch({
                type: ERRO_CADASTRO,
                payload: error.response.data
            });
        });
    };
}

// MÉTODOS ADMIN--------------------------------------------------------------------------------------------------------
export function admin_login(values) {
    const request = axios.post(`${BASE_URL_PRODUCAO}/admin/entrar`, values);

    return (dispatch) => {
        request.then((response) => {
            dispatch({
                type: SUCESSO_LOGIN_ADMIN,
                payload: response
            });
        }).catch((error) => {
            alert(error);
            dispatch({
                type: ERRO_LOGIN,
                payload: error.response.data
            });
        });
    };
}

export function admin_sair()
{
    return {
        type: SUCESSO_LOGOUT_ADMIN,
        payload: ''
    };
}

export function cadastrar_universidade(values) {
    const request = axios.post(`${BASE_URL_PRODUCAO}/admin/universidade/cadastrar`, values);

    return (dispatch) => {
        request.then((response) => {
            dispatch({
                type: SUCESSO_CADASTRO_UNIVERSIDADE,
                payload: response
            });
        }).catch((error) => {
            console.log(error);
            dispatch({
                type: ERRO_LOGIN,
                payload: error.response.data
            });
        });
    };
}
