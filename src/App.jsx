import { Navigate, Route, Routes } from 'react-router-dom';
import ArchiveLayout from './layouts/ArchiveLayout.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Projects from './pages/Projects.jsx';

export default function App() {
  return (
    <ArchiveLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/findings" element={<Navigate to="/projects" replace />} />
        <Route path="/findings/:slug" element={<Navigate to="/projects" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ArchiveLayout>
  );
}
