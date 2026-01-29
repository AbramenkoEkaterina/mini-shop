import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
    reducer: rootReducer
})

//Возьми тип функции dispatch из моего store и назови его AppDispatch
export type AddDispatch = typeof store.dispatch