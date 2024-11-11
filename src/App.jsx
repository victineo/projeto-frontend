import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Homepage";
import { AboutUs } from "./pages/AboutUs";
import { Help } from "./pages/Help";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { Subscriptions } from "./pages/Subscriptions";
import { NoPage } from "./pages/NoPage";
import "./global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
