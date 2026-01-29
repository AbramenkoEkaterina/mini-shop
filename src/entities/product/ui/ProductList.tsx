import { fetchProducts } from "../model/productThunks";
import {
    selectProducts, selectProductsError, selectProductsLoading
} from '../model/productSelectors';
import type { AddDispatch } from "../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const ProductList = () => {
    const dispatch = useDispatch<AddDispatch>();
    const products = useSelector(selectProducts);
    const loading = useSelector(selectProductsLoading);
    const error = useSelector(selectProductsError);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    if (loading) return <div>Loading products...</div>
    if (error) return <div>Error: {error}</div>

    return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded p-2 shadow">
          <img src={product.image} alt={product.title} className="h-40 w-full object-contain" />
          <h3 className="mt-2 font-bold">{product.title}</h3>
          <p className="mt-1 text-gray-700">${product.price}</p>
        </div>
      ))}
    </div>
  )
}

//useSelector для чтения состояния: товары, загрузка, ошибка
//useEffect, чтобы при монтировании компонента вызвать dispatch(fetchProducts())