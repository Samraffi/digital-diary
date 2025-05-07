import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { ErrorBoundary } from 'react-error-boundary';
import DiariesPage from "./pages/DiariesPage";
import DiaryPage from "./pages/DiaryPage";
import ErrorFallback from './components/ErrorFallback';
import DiaryCreatePage from "./pages/DiaryCreatePage";
import DiaryEditPage from "./pages/DiaryEditPage";

const App = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => console.error('Error:', error, info)}
    >
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Navigate to="/diaries" replace />} />
          <Route path="/diaries" element={<DiariesPage />} />
          <Route path="/diaries/:diaryId" element={<DiaryPage />} />
          <Route path="/diaries/add" element={<DiaryCreatePage />} />
          <Route path="/diaries/edit/:diaryId" element={<DiaryEditPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
