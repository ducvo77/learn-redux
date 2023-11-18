import { Action, PayloadAction } from "@reduxjs/toolkit"
import { all, delay, put, takeEvery, takeLatest } from "redux-saga/effects"
import {} from "../features/counter/counterSlice"
import authSaga from "../features/auth/authSaga"

export default function* rootSaga() {
  yield all([authSaga()])
}
