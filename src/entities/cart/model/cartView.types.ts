import type { Product } from "../../product/model/product.types";
import type { CartItem } from "./cart.types";

export interface CartItemWithProduct extends CartItem {
    product?: Product
    isAvailable: boolean
    isSelected: boolean
}