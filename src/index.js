import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import { APP_ROUTES } from "./constants"

const root = ReactDOM.createRoot(document.getElementById("root"))

const router = createBrowserRouter(
  createRoutesFromElements(
    APP_ROUTES.map(({ path, element }) => <Route key={path} path={path} element={element}></Route>)
  )
)

root.render(<RouterProvider router={router} />)
