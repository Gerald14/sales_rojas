import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//Reducers
import CategoryReducer from "./reducers/category.reducer";  
import MangaReducer from "./reducers/mangas.reducer";
import CartReducer from "./reducers/cart.reducer";

const RootReducer = combineReducers({
    category: CategoryReducer,
    manga: MangaReducer,
    cart: CartReducer
});

export default createStore(RootReducer, applyMiddleware(thunk));