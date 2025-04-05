import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import Home from "./Home";
import { ChakraProvider } from '@chakra-ui/react'
import Hourly from "./Hourly";
import Daily from "./Daily";
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hourly" element={<Hourly/>} />
          <Route path="/daily" element={<Daily/>} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
