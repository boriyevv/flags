import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About"

import Conturies from "./pages/Conturies/conturies.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Conturies />} />
        <Route path="/country/:names" element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
