import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "./types";
import { fetchProducts } from "./productThunks";

interface ProductState {
    items: Product[],
    loading: boolean,
    error: string | null
}

const initialState: ProductState = {
    items: [],
    loading: false,
    error: null,
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        //запрос отправлен
        .addCase(fetchProducts.pending, state => {
            state.loading = true
            state.error = null
        })
        //завершился успешно
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload
            state.loading = false      
        })
        //завершился с ошибкой
        .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload as string
        })
    }
})
export default productSlice.reducer

//Slice — это кусок состояния Redux + редюсеры + автоматические action creators.
//reducers — это обычные синхронные действия (например, add/remove product).
//extraReducers — здесь подключаем асинхронные экшены, созданные через createAsyncThunk.
//builder — объект, который позволяет добавлять обработку различных action-типов для асинхронных операций.