import { addToCart } from '../../cart/model/cartSlice'
import { useDispatch } from 'react-redux'
import type { Product } from '../model/product.types'

type Props = {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch()

  return (
    <div className="border rounded p-3 shadow flex flex-col">
      <img src={product.image} alt={product.title} className="h-40 w-full object-contain" />

      <h3 className="mt-2 font-bold text-sm">{product.title}</h3>
      <p className="mt-1 text-gray-700">${product.price}</p>

      <button
        className="mt-auto bg-black text-white py-2 rounded"
        onClick={() => dispatch(addToCart(product.id))}
      >
        В корзину
      </button>
    </div>
  )
}
