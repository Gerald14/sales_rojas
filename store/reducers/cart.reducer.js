import { CART } from "../../data/cart";

const INITIAL_STATE = {
    items: CART
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                items: [...state.cart, action.payload]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.cart.filter(cart => cart.id !== action.payload)
            }
        case 'UPDATE_CART':
            return {
                ...state,
                items: state.cart.map(cart => {
                    if (cart.id === action.payload.id) {
                        return {
                            ...cart,
                            quantity: action.payload.quantity
                        }
                    } else {
                        return cart
                    }
                })
            }
        default:
            return state
    }
}