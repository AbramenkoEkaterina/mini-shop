import { ProductList } from '../entities/product/ui/ProductList'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <main className="max-w-5xl mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Каталог товаров</h1>

        <Link to="/cart" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Корзина
        </Link>
      </div>

      <ProductList />
    </main>
  )
}
