import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layer from "./views/Layer";
import Home from "./views/Home";
import Contact from "./views/Contact";
import About from "./views/About";
import Login from "./views/Login";
import RealHome from "./views/RealHome";
import Register from "./views/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layer />}>
          <Route index element={<RealHome />} />
          <Route path="puzzlegame" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
