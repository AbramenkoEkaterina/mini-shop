import { combineReducers } from "@reduxjs/toolkit";
import  productReducer  from '../entities/product/model/productSlice';
import cartReducer from '../entities/cart/model/cartSlice';
import waitingListReducer from '../entities/cart/model/waitingListSlice'

export const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    waitingList: waitingListReducer
})

//Посмотри, какой тип состояния возвращает мой rootReducer, и запомни его под именем RootState
export type RootState = ReturnType<typeof rootReducer>



// глобально
// {
//   product: {
//     items: Product[],
//     loading: boolean,
//     error: string | null
//   },
//   cart: {
//     items: CartItem[]
//   }
// }
