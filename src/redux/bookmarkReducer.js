import { createReducer } from "@reduxjs/toolkit";

export const bookmarkReducer = createReducer({
    bookmarks: []
}, {
    addBookmark: (state, action) => {
        const item = action.payload;
        const isExists = state.bookmarks.some((obj) => obj.id === item.id);
        if(!isExists)
            state.bookmarks.push(item);
            return state;
    },
});