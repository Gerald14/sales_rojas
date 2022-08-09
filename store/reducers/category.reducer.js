import { CATEGORIES } from "../../data/categories";
import { SELECT_CATEGORY } from "../actions/category.actions";

const INITIAL_STATE = {
    categories: CATEGORIES,
    selected: null
}

const CategoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            const indexCategory = state.categories.findIndex(cat => cat.id === action.payload);
            if(indexCategory !== -1){
                return { ...state, selected: state.categories[indexCategory] }
            }
            return state;
        default:
            return state
    }
}

export default CategoryReducer