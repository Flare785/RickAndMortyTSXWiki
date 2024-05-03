import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Home from "./Pages/Home";
import Characters from "./Pages/Characters";
import Footer from "./components/Footer/Footer";
import CardDetails from "./components/Cards/CardDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CardDetails />} />
      </Routes>
      <div className="App">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
