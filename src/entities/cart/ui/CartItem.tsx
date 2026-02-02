// entities/cart/ui/CartItem.tsx
import { useDispatch } from 'react-redux'
import {
  incremente,
  decremente,
  removeFromCart,
  toggleSelect,
} from '../model/cartSlice'
import { addToWaitingList } from '../model/waitingListSlice' // если есть отдельный slice
import type { CartItemWithProduct } from '../model/cartView.types'

type Props = {
  item: CartItemWithProduct
}

export const CartItem = ({ item }: Props) => {
  const dispatch = useDispatch()
  const { product, quantity, isAvailable, isSelected, productId } = item

  return (
    <div className="flex gap-4 border p-4 rounded">
      {/* Картинка */}
      {product ? (
        <img
          src={product.image}
          alt={product.title}
          className="w-20 h-20 object-contain"
        />
      ) : (
        <div className="w-20 h-20 bg-gray-200 flex items-center justify-center text-xs">
          Нет фото
        </div>
      )}

      <div className="flex-1">
        <h3 className="font-semibold">{product?.title ?? 'Товар недоступен'}</h3>
        {product && <p className="text-gray-600">${product.price}</p>}

        {!isAvailable && (
          <div className="flex items-center gap-2">
            <p className="text-red-500 text-sm">Товар недоступен</p>
            <button
              className="text-blue-500 text-sm underline"
              onClick={() => {
                // удаляем из корзины
                dispatch(removeFromCart(productId))
                // добавляем в список ожидания
                dispatch(addToWaitingList(productId))
              }}
            >
              В список ожидания
            </button>
          </div>
        )}

        {/* Управление */}
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => dispatch(decremente(productId))}
            className="px-2 border"
            disabled={!isAvailable} // если нет, не уменьшаем
          >
            −
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => dispatch(incremente(productId))}
            className="px-2 border"
            disabled={!isAvailable} // если нет, не увеличиваем
          >
            +
          </button>
          <button
            onClick={() => dispatch(removeFromCart(productId))}
            className="ml-4 text-red-500"
          >
            Удалить
          </button>
        </div>
      </div>

      {/* Чекбокс */}
      <input
        type="checkbox"
        checked={isSelected}
        disabled={!isAvailable}
        onChange={() => dispatch(toggleSelect(productId))}
      />
    </div>
  )
}
