import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Docs from "./pages/Docs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="docs" element={<Docs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
