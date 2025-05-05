import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { ErrorBoundary } from 'react-error-boundary';
import DiariesPage from "./pages/DiariesPage";
import DiaryViewPage from "./pages/DiaryViewPage";
import ErrorFallback from './components/ErrorFallback';

const App = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => console.error('Ошибка:', error, info)}
    >
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Navigate to="/diaries" replace />} />
          <Route path="/diaries" element={<DiariesPage />} />
          <Route path="/diaries/:diaryId" element={<DiaryViewPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
