import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//Reducers
import CategoryReducer from "./reducers/category.reducer";  
import MangaReducer from "./reducers/mangas.reducer";
import CartReducer from "./reducers/cart.reducer";

const RootReducer = combineReducers({
    category: CategoryReducer,
    cart: CartReducer,
    manga: MangaReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));