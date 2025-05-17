
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import GameMode from './pages/GameMode'
import SplashScreen from './pages/auth/SplashScreen'
import OnboardingScreen from './pages/auth/OnboardingScreen'
import LoginScreen from './pages/auth/LoginScreen'
import Arcade from './pages/AracdeGames'
import Trivia from './pages/Trivia'
import PhoneDetectionPage from './pages/auth/PhoneDetactionPage'
import WelcomePage from './pages/auth/Welcome'
import VerifyOTP from './pages/auth/VerifyOtp'

function App() {
  const [loading, setLoading] = useState(true)

  // Simulate loading splash screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <SplashScreen />
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/phone-detection" replace />} />
        <Route path="/phone-detection" element={<PhoneDetectionPage />} />
        <Route path="/onboarding" element={<OnboardingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/game-mode" element={<GameMode />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/arcade" element={<Arcade />} />
        <Route path="/trivia" element={<Trivia />} />
        <Route path="/leaderboard" element={<Trivia />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )
}

export default App