import "./design-system/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./design-system/pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
