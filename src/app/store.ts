import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit"

import createSagaMiddleware from "redux-saga"
import authReducer from "../features/auth/authSlice"
import counterReducer from "../features/counter/counterSlice"
import rootSaga from "./rootSaga"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: "root",
  storage,
}

const reducers = combineReducers({
  counter: counterReducer,
  auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
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
