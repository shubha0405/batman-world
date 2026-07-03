import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import EmotionPage from "./pages/EmotionPage";
import EmotionDetails from "./pages/EmotionDetails";
import "./App.css";
import Loading from "./pages/Loading";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/loading" element={<Loading/>}/>
      <Route path="/emotions" element={<EmotionPage />} />
      <Route path="/emotion/:id" element={<EmotionDetails />} />
    </Routes>
  );
}

export default App;