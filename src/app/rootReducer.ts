import { combineReducers } from "@reduxjs/toolkit";
import  productReducer  from '../entities/product/model/productSlice';

export const rootReducer = combineReducers({
    product: productReducer
})

//Посмотри, какой тип состояния возвращает мой rootReducer, и запомни его под именем RootState
export type RootState = ReturnType<typeof rootReducer>