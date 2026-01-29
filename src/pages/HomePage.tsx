import { ProductList } from "../entities/product/ui/ProductList";

export const HomePage = () => {
  return (
    <main className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold my-4">Каталог товаров</h1>
      <ProductList />
    </main>
  )
}
