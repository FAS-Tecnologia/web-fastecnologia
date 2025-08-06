import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { PrivacyPage } from '../pages/Privacy';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/privacidade" element={<PrivacyPage />} />
    </Routes>
  );
}
