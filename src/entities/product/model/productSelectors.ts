import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../../app/rootReducer";
import type { Product } from "./product.types";

export const selectProducts = (state: RootState) => state.product.items;
export const selectProductsLoading = (state: RootState) => state.product.loading;
export const selectProductsError = (state: RootState) => state.product.error;

//словарь
export const selectProductsById =createSelector(
    [selectProducts],
    (products) => {
        const map: Record<number, Product> = {};
        products.forEach((p) => {
            map[p.id] = p;
        });
        return map;
    }
)

//Селектор — это функция, которая берёт часть состояния слайса из Redux store.