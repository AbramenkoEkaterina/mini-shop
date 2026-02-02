import { CartList } from "../entities/cart/ui/CartList";

export const CartPage = () => {
    return(
        <main className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Корзина</h1>
      <CartList />
    </main>
    )
}