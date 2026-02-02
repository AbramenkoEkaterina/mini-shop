export interface CartItem {
    productId: number
    quantity: number
    selected: boolean
}

export interface CartState {
    items: CartItem[]
}