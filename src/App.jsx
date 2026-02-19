import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Game from "./pages/Game";
import End from "./pages/End";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/game" element={<Game />} />
      <Route path="/end" element={<End />} />
    </Routes>
  );
}

export default App;