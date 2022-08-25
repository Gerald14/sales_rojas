import { CART } from "../../data/cart";

//actions
import { ADD_ITEM, REMOVE_ITEM, CONFIRM_CART } from "../../store/actions/cart.actions";

const INITIAL_STATE = {
    items: CART,
    total: 2500
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM:
            let updatedItems = [];
            if(state.items.find(item => item.id === action.item.id)) {
                updatedItems = state.items.map(item => {
                    if(item.id === action.item.id) {
                        item.quantity += 1;
                    }
                    return item;
                }).filter(item => item.quantity > 0);
            } else {
                updatedItems = [...state.items, {...action.item, quantity: 1}];
            }
            return {
                ...state,
                items: updatedItems,
                total: sumaTotal(updatedItems)
            }
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.itemID)
            }
        case CONFIRM_CART:
            return {
                ...state,
            }
        default:
            return state;
    }
}

const sumaTotal = (items) => items
    .map(item => item.price * item.quantity)
    .reduce((total, item) => total + item, 0);

export default CartReducer;