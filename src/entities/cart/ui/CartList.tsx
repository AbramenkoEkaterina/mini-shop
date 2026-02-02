import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'
import { selectCartItemsWithProducts } from '../model/cartWithProductsSelector'

export const CartList = () => {
  const items = useSelector(selectCartItemsWithProducts)

  if (items.length === 0) {
    return <p>Корзина пуста</p>
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <CartItem key={item.productId} item={item} />
      ))}
    </div>
  )
}
