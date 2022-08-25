import { CART } from "../../data/cart";

const INITIAL_STATE = {
    items: CART,
    total: 2500
}

const CartReducer = (state = INITIAL_STATE, action) => {
    return state;
}
export default CartReducer;