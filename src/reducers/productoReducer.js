import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR

} from '../types';
// Cada reducer tiene su propio State

const initialState = {
    productos: [],
    console: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case AGREGAR_PRODUCTO:
            return { 
                ...state,
                louding: action.payload
           }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                louding: false,
                productos: [...state.productos, action.payload]
            }
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

    default :
        return state;
  }
}
