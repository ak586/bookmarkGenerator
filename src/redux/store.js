import { configureStore } from "@reduxjs/toolkit"
import { bookmarkReducer } from "./bookmarkReducer";

const store = configureStore(
    {
        reducer: {
            bookmark:bookmarkReducer
        }
    }
);

export default store;