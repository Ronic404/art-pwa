import { configureStore } from '@reduxjs/toolkit'

import artistsReducer from './artists/artistsSlice'
import counterReducer from './counter/counterSlice'

export const store = configureStore({
  reducer: {
    artists: artistsReducer,
    counter: counterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
