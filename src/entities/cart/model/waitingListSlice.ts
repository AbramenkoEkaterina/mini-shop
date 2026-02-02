// entities/cart/model/waitingListSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface WaitingListItem {
  productId: number
}

export interface WaitingListState {
  items: WaitingListItem[]
}

const initialState: WaitingListState = {
  items: [],
}

export const waitingListSlice = createSlice({
  name: 'waitingList',
  initialState,
  reducers: {
    addToWaitingList(state, action: PayloadAction<number>) {
      const productId = action.payload
      if (!state.items.find(item => item.productId === productId)) {
        state.items.push({ productId })
      }
    },
    removeFromWaitingList(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.productId !== action.payload)
    },
    clearWaitingList(state) {
      state.items = []
    },
  },
})

export const {
  addToWaitingList,
  removeFromWaitingList,
  clearWaitingList,
} = waitingListSlice.actions

export default waitingListSlice.reducer
