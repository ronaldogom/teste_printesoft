import axios from 'axios';

export const SUCESSO_LOGIN_USUARIO = 'sucesso_login_usuario';
export const SUCESSO_LOGOUT_USUARIO = 'sucesso_logout_usuario';
export const SUCESSO_CADASTRO_UNIVERSIDADE = 'sucesso_cadastro_universidade';
export const SUCESSO_LISTAR_UNIVERSIDADE = 'sucesso_listar_universidade';
export const SUCESSO_LISTAR_USUARIOS = 'sucesso_listar_usuarios';
export const SUCESSO_VINCULAR_UNIVERSIDADE = 'sucesso_vincular_universidade';
export const SUCESSO_ATUALIZAR_STATUS = 'sucesso_atualizar_status';
export const RESET_CADASTRO_UNIVERSIDADE = 'reset_cadastro_universidade';
export const SUCESSO_LOGIN_ADMIN = 'sucesso_login_admin';
export const SUCESSO_LOGOUT_ADMIN = 'sucesso_logout_admin';
export const ERRO_LOGIN = 'error_login';
export const SUCESSO_CADASTRO = 'sucesso_cadastro';
export const ERRO_CADASTRO = 'erro_cadastro';

const BASE_URL_PRODUCAO = 'https://r-labs.com.br/teste_printesoft_lravel/public/api';

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
            console.log(error);
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
            console.log(error);
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
        });
    };
}

export function atualizar_status_usuario(values) {
    const request = axios.post(`${BASE_URL_PRODUCAO}/admin/usuario/status/atualiziar`, values);

    return (dispatch) => {
        request.then((response) => {
            dispatch({
                type: SUCESSO_ATUALIZAR_STATUS,
                payload: response
            });
        }).catch((error) => {
            console.log(error);
        });
    };
}

export function reset_cadastro_universidade_reducer()
{
    return {
        type: RESET_CADASTRO_UNIVERSIDADE,
        payload: ''
    };
}

export function listar_universidades(values) {
    const request = axios.post(`${BASE_URL_PRODUCAO}/admin/universidade/listar`, values);

    return (dispatch) => {
        request.then((response) => {
            dispatch({
                type: SUCESSO_LISTAR_UNIVERSIDADE,
                payload: response
            });
        }).catch((error) => {
            console.log(error);
        });
    };
}

export function listar_usuarios(values) {
    const request = axios.post(`${BASE_URL_PRODUCAO}/admin/usuario/listar`, values);

    return (dispatch) => {
        request.then((response) => {
            dispatch({
                type: SUCESSO_LISTAR_USUARIOS,
                payload: response
            });
        }).catch((error) => {
            console.log(error);
        });
    };
}

export function vincular_universidades(values) {
    const request = axios.post(`${BASE_URL_PRODUCAO}/admin/usuario/universidade/atribuir`, values);

    return (dispatch) => {
        request.then((response) => {
            dispatch({
                type: SUCESSO_VINCULAR_UNIVERSIDADE,
                payload: response
            });
        }).catch((error) => {
            console.log(error);
        });
    };
}