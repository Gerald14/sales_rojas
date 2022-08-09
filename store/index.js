import { createStore, combineReducers } from "redux";

//Reducers
import CategoryReducer from "./reducers/category.reducer";  
import MangaReducer from "./reducers/mangas.reducer";

const RootReducer = combineReducers({
    category: CategoryReducer,
    manga: MangaReducer
});

export default createStore(RootReducer);