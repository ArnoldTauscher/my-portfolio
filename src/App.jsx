import { Analytics } from '@vercel/analytics/react';
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Analytics />
      <AppRoutes />
    </Router>
  );
}

export default App;
