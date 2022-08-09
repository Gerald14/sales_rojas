import { MANGAS } from "../../data/mangas";
import { SELECT_MANGA, FILTERED_MANGA } from "../actions/manga.actions";

const INITIAL_STATE = {
    mangas: MANGAS,
    filteredManga: [],
    selected: null
}

const MangaReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_MANGA:
            return {
                ...state,
                selected: state.mangas.find(manga => manga.id === action.payload)
            }
        case FILTERED_MANGA:
            return { 
                ...state,
                 filteredManga: state.mangas.filter(manga => manga.category === action.payload) 
                }
        default:
            return state
    }
}

export default MangaReducer;