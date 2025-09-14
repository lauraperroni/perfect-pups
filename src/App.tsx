import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
