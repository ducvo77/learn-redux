import { PayloadAction } from "@reduxjs/toolkit"
import { call, delay, fork, put, take } from "redux-saga/effects"
import { LoginPayload, authActions } from "./authSlice"

function* handleLogin(payload: LoginPayload) {
  try {
    localStorage.setItem("access_token", "djashkjdahsjdahs")
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: payload.username,
      }),
    )
  } catch (error: any) {
    yield put(authActions.loginFailed(error.message))
  }
}

function* handleLogout() {
  localStorage.removeItem("access_token")
}

function* wathLoginFlow() {
  while (true) {
    const isLoggedIn = !!localStorage.getItem("access_token")

    if (!isLoggedIn) {
      // loggin

      const action: PayloadAction<LoginPayload> = yield take(
        authActions.login.type,
      )
      yield fork(handleLogin, action.payload)
    }
    // logout
    yield take(authActions.logout.type)
    yield call(handleLogout)
  }
}

export default function* authSaga() {
  yield fork(wathLoginFlow)
}
