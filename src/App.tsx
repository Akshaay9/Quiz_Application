import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./Components/HomeScreen/Index";
import QuizComponent from "./Components/QuizComponent/QuizComponent";
import ResultComponent from "./Components/ResultComponent/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/quiz" element={<QuizComponent />} />
        <Route path="/result" element={<ResultComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
