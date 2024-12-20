import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/login"
import LoginLayout from "./layout/LoginLayout"
import Home from "./pages/home"
import Register from "./pages/register"
import View from "./pages/view"
import CreateBlog from "./pages/createBlog"
import { Toaster } from "react-hot-toast"

export default function App() {
  return (
    <BrowserRouter future={{
      v7_relativeSplatPath: true,
    }}>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<LoginLayout><Home /></LoginLayout>} />
          <Route path="/Login" element={<LoginLayout><Login /></LoginLayout>} />
          <Route path="/register" element={<LoginLayout><Register /></LoginLayout>}></Route>
          <Route path="/view/:id" element={<LoginLayout> <View /> </LoginLayout>}></Route>
          <Route path="/create-blog" element={<LoginLayout> <CreateBlog /> </LoginLayout>}></Route>
        </Routes>
      </div >
      <Toaster/>
    </BrowserRouter >
  )
}

