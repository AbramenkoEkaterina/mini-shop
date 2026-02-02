import { createSelector } from "@reduxjs/toolkit";
import { selectCartItems } from "./cartSelectors";
import { selectProductsById } from "../../product/model/productSelectors"; 
import type { CartItemWithProduct } from "./cartView.types";

export const selectCartItemsWithProducts = createSelector(
  [selectCartItems, selectProductsById],
  (cartItems, productsById): CartItemWithProduct[] =>
    cartItems.map((item) => {
      const product = productsById[item.productId];

      return {
        ...item,
        product,                    // может быть undefined
        isAvailable: !!product,     // true — товар есть, false — товара нет
        isSelected: item.selected && !!product,  // нельзя выбрать, если товара нет
      };
    })
);

// Только доступные товары
export const selectAvailableCartItems = createSelector(
  [selectCartItemsWithProducts],
  (items) => items.filter(item => item.isAvailable)
);

// Только выбранные и доступные товары (для оформления заказа)
export const selectCheckoutItems = createSelector(
  [selectCartItemsWithProducts],
  (items) => items.filter(item => item.isSelected && item.isAvailable)
);

// Есть ли недоступные товары в корзине
export const selectHasUnavailableItems = createSelector(
  [selectCartItemsWithProducts],
  (items) => items.some(item => !item.isAvailable)
);

// Общая сумма только по доступным и выбранным товарам
export const selectCheckoutTotal = createSelector(
  [selectCheckoutItems],
  (items) =>
    items.reduce((sum, item) => sum + (item.product?.price ?? 0) * item.quantity, 0)
);

//колличество выбранных товаров
export const selectCheckoutTotalQuantity = createSelector(
  [selectCheckoutItems],
  items => items.reduce((sum, item) => sum + item.quantity, 0)
)

//все ли выбрано
export const selectIsAllSelected = createSelector(
  [selectAvailableCartItems],
  items => items.length > 0 && items.every(item => item.isSelected)
)
