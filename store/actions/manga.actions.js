export const SELECT_MANGA = 'SELECT_MANGA';
export const FILTERED_MANGA = 'FILTERED_MANGA';

export const selectManga = (mangaId) => ({
    type: SELECT_MANGA,
    payload: mangaId
});

export const filteredManga = (categoryId) => ({
    type: FILTERED_MANGA,
    payload: categoryId
});