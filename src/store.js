import { configureStore } from "@reduxjs/toolkit"
import { postApi } from "./sevices/post"
import { setupListeners } from "@reduxjs/toolkit/dist/query"

export const store = configureStore({
    reducer : {
        [postApi.reducerPath] : postApi.reducer
    },
    middleware : (getDefaultMiddleware)=>getDefaultMiddleware().concat(postApi.middleware),
})
// console.log(store.dispatch);
setupListeners(store.dispatch)
