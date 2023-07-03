import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import { ComparisonTableReducer } from '../modules/common/features/ComparisonTable/store/reducers'

export const store = configureStore({
  reducer: {
    comparisonTables: ComparisonTableReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type TAppDispatch = typeof store.dispatch
export type TRootState = ReturnType<typeof store.getState>
export type TAppThunk<ReturnType = void> = ThunkAction<ReturnType, TRootState, unknown, Action<string>>
