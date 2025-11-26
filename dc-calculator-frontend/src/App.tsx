import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppNavbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { DevicesPage } from './pages/DevicesPage';
import { DeviceDetailPage } from './pages/DeviceDetailPage';
import { BASENAME } from './target_config';

export default function App() {
  return (
    <BrowserRouter basename={BASENAME}>
      <AppNavbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/devices" element={<DevicesPage />} />
          <Route path="/devices/:id" element={<DeviceDetailPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}