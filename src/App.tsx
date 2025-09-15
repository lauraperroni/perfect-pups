import { HashRouter as Router, Routes, Route } from "react-router-dom";
import rainbow from "./assets/rainbow.jpeg";
import ReactProject from "./pages";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${rainbow})`,
        backgroundRepeat: "repeat",
        backgroundSize: "2400px",
        minHeight: "105.3vh",
        paddingTop: "100px",
      }}
    >
      <Router>
        <Routes>
          {" "}
          <Route path="" element={<ReactProject />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
