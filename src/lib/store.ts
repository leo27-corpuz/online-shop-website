import { configureStore } from '@reduxjs/toolkit'
import marginButtomReducer from '@/lib/features/marginButtom';
export const makeStore = () => {
  return configureStore({
    reducer: {
        marginButtom: marginButtomReducer,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']