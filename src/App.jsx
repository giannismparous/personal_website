import { Navigate, Route, Routes } from 'react-router-dom'
import SiteShell from './components/SiteShell'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import SocialPage from './pages/SocialPage'

function App() {
  return (
    <SiteShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personal" element={<AboutPage />} />
        <Route path="/lifestyle" element={<SocialPage />} />
        <Route path="/social" element={<Navigate to="/lifestyle" replace />} />
        <Route path="/about" element={<Navigate to="/personal" replace />} />
      </Routes>
    </SiteShell>
  )
}

export default App
