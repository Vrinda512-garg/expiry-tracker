import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Personal from "./pages/Personal/personal";
import Business from "./pages/Business/business";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/business" element={<Business />} />
    </Routes>
  );
}

export default App;

