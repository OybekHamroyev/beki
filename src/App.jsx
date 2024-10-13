import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import A from "./pages/A";
import B from "./pages/B";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a" element={<A />} />
        <Route path="/sidebar" element={<A />}>
          <Route path="/sidebar/dashboard" element={<B />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
