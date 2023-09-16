import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Navbar from "./components/Navbar";
import { Register } from "./screens/Register";
import Dashboard from "./screens/Dashboard";
import Admin from "./screens/Admin";
import Cart from "./screens/Cart";
import Profile from "./screens/Profile";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="*"
                    element={
                        <h1 className="text-center text-5xl">
                            404 Page Not Found
                        </h1>
                    }
                />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
