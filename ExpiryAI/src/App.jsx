import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import BusinessLogin from "./pages/Business/business_login";
import BusinessSignup from "./pages/Business/business_signup";

// Import both login and signup separately
import PersonalLogin from "./pages/Personal/personal_login";
import PersonalSignup from "./pages/Personal/personal_signUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/business/login" element={<BusinessLogin />} />
      <Route path="/business/signup" element={<BusinessSignup />} />

      {/* Personal routes */}
     
      <Route path="/personal/login" element={<PersonalLogin />} />
      <Route path="/personal/signup" element={<PersonalSignup />} />
    </Routes>
  );
}

export default App;


