import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import DiariesPage from "./pages/DiariesPage";
import { fetchDiaries } from "./services/fetchDiaries";
import { DiaryEntry } from "./types/diary";

const App = () => {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);

  // Load diaries when component mounts
  useEffect(() => {
    const loadDiaries = async () => {
      const data = await fetchDiaries();
      if (data) setDiaries(data);
    };
    loadDiaries();
  }, []);

  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Navigate to="/diaries" replace />} />
        <Route 
          path="/diaries" 
          element={
            <DiariesPage
              diaries={diaries}
            />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
