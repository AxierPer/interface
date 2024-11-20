import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/login"
import LoginLayout from "./layout/LoginLayout"
import Home from "./pages/home"

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
        </Routes>
      </div>
    </BrowserRouter>
  )
}

