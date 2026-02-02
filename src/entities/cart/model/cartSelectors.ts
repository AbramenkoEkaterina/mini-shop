import type { RootState } from "../../../app/rootReducer";

//получение все товаров  в корзине
export const selectCartItems = (state: RootState) => state.cart.items;
//получение только выбранных
export const selectCartSelectedItems = (state: RootState) => state.cart.items.filter(item => item.selected);

//колличество всех товаров с учетом повтора
export const selectCartTotalQuantity = (state: RootState) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0)