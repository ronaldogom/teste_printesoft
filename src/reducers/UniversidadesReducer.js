import {SUCESSO_LISTAR_UNIVERSIDADE} from "../actions";
import _ from 'lodash';

export default function (state = false, action) {

    switch (action.type)
    {
        case SUCESSO_LISTAR_UNIVERSIDADE:
            console.log(_.mapKeys(action.payload.data.universidades, 'id'));
            return _.mapKeys(action.payload.data.universidades, 'id');
        default:
            return state;
    }
}
