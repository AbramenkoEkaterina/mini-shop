import type { RootState } from "../../../app/rootReducer";

export const selectProducts = (state: RootState) => state.product.items;
export const selectProductsLoading = (state: RootState) => state.product.loading;
export const selectProductsError = (state: RootState) => state.product.error;

//Селектор — это функция, которая берёт часть состояния слайса из Redux store.