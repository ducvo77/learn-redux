import { Action, PayloadAction } from "@reduxjs/toolkit"
import { all, delay, put, takeEvery, takeLatest } from "redux-saga/effects"
import {
  incrementSaga,
  incrementSagaSuccess,
} from "../features/counter/counterSlice"

function* hanelIncrementSaga(action: PayloadAction<number>) {
  // console.log("action.type")
  yield delay(2000)
  yield put(incrementSagaSuccess(action.payload))
}

export default function* rootSaga() {
  yield takeLatest(incrementSaga.toString(), hanelIncrementSaga)
}
