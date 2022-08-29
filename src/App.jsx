import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JwtContextProvider } from "./contexts/jwtContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Mascotas from "./pages/Mascotas";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RequireAuth from "./components/RequiredAuth";
import MascotasDetail from "./pages/MascotasDetail";
import './App.css'

function App() {
  return (
    <JwtContextProvider>
      <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mascotas" element={<Mascotas/>} />
            <Route path="/mascotas/:id" element={<MascotasDetail/>} />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>

          <Footer />
        </Router>
      </JwtContextProvider>
              
  )
}

export default App

