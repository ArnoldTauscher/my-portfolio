import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Analytics />
        <AppRoutes />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
