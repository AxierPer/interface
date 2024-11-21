import { AppRoutes } from "../types/routes"
import LoginLayout from "../layout/LoginLayout"
import Home from "../pages/home"
import Login from "../pages/login"
import { Navigate } from "react-router-dom"
import Register from "../pages/register"

export const AppRoute: AppRoutes[] = [
  {
    path: '/',
    element: <Navigate to="/home" replace />
  },
  {
    path: '/home',
    element: (
      <LoginLayout>
        <Home />
      </LoginLayout>
    ),
  },
  {
    path: '/login',
    element: (
      <LoginLayout>
        <Login />
      </LoginLayout>
    )
  },
  {
    path: '/register',
    element: (
      <LoginLayout>
        <Register></Register>
      </LoginLayout>
    )
  }
]


export const RoutePaths = {
  home: '/home',
  login: '/login',
  register: '/register'
};
