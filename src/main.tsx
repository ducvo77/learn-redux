// https://stackoverflow.com/questions/75847664/public-private-routing-in-react-v6

import { CssBaseline } from "@mui/material"
import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/es/integration/react"
import App from "./App"
import { persistor, store } from "./app/store"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CssBaseline />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
