import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import DiariesPage from "./pages/DiariesPage";
import DiaryViewPage from "./pages/DiaryViewPage";

const App = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Navigate to="/diaries" replace />} />
        <Route path="/diaries" element={<DiariesPage />} />
        <Route path="/diaries/:diaryId" element={<DiaryViewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
