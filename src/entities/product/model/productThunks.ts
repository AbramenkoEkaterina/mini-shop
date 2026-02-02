import { createAsyncThunk } from '@reduxjs/toolkit'
import type { Product, ProductApi } from './product.types'
import { productsApi } from '../../../shared/api/products'

export const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
  'product/fetchProducts',
  async (_, thunkAPI) => {
    try {
      const data: ProductApi[] = await productsApi.getAll()

      const products: Product[] = data.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        description: item.description,
      }))
      return products
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch products/Не удалось получить товары')
    }
  },
)
