import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit"
import { PERSIST, persistReducer, persistStore } from "redux-persist"

import storage from "redux-persist/lib/storage"
import createSagaMiddleware from "redux-saga"
import authReducer from "../features/auth/authSlice"
import counterReducer from "../features/counter/counterSlice"
import dashboardReducer from "../features/dashboard/dashboardSlice"
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: "root",
  storage,
}

const reducers = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  dashboard: dashboardReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const persistor = persistStore(store)
