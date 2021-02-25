import { createStore } from 'redux'
import { ADD_TO_CART } from './actions'


const initialStore = {
    cart: []
}

const rootReducer = (state = initialStore, action) => {

    if (action.type === ADD_TO_CART) {
        if (state.cart.find(i => i === action.id)) {
            return {
                ...state,
                cart: state.cart.filter(i => i != action.id)
            }
        }
        return {
            ...state,
            cart: state.cart.concat(action.id)
        }
    }
    return state
}

export default createStore(rootReducer)