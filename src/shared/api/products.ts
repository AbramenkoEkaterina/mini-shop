import { apiFetch } from './base'
import type { ProductApi } from '../../entities/product/model/product.types'

export const productsApi = {
  getAll: () => apiFetch<ProductApi[]>('/products'),
  getById: (id: number) => apiFetch<ProductApi>(`/products/${id}`),
}
