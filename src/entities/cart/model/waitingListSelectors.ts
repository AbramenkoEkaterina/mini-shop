import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../../app/rootReducer";
import { selectProductsById } from "../../product/model/productSelectors";


export const selectWaitingListItems = (state: RootState) => state.waitingList.items

export const selectWaitingListWithProducts = createSelector(
  [selectWaitingListItems, selectProductsById],
  (items, productsById) =>
    items.map(item => ({
      ...item,
      product: productsById[item.productId],
    }))
)