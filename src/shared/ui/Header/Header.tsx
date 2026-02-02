import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartTotalQuantity } from '../../../entities/cart/model/cartSelectors'

export const Header = () => {
  const totalQuantity = useSelector(selectCartTotalQuantity)
  return (
    <header className="border-b mb-6">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Логотип / Каталог */}
        <Link to="/" className="text-xl font-bold">
          MiniShop
        </Link>

        {/* Навигация */}
        <nav className="flex items-center gap-6">
          <Link to="/" className="hover:underline">
            Каталог
          </Link>

          <Link to="/cart" className="hover:underline">
            Корзина
            {totalQuantity > 0 && <span className="ml-1 font-semibold">({totalQuantity})</span>}
          </Link>

          <Link to="/profile" className="hover:underline">
            Личный кабинет
          </Link>
        </nav>
      </div>
    </header>
  )
}
