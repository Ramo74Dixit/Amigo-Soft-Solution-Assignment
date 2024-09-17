import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import CollegeDashboard from './pages/CollegeDashboard';
import Courses from './pages/Courses';
import { useEffect, useState } from 'react';
import Students from  './pages/Students'
import Faculty from './pages/Faculty'
import Attendance from './pages/Attendance'
import Assignment from './pages/Assignment'
import Event from './pages/Event'
import Placement from './pages/Placement'
function App() {
  const [role, setRole] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    const token = localStorage.getItem('token');
    if (storedRole && token) {
      setRole(storedRole);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/collegedashboard" element={<CollegeDashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path="/college/courses" element={<Courses />} />
        <Route path="/college/events" element={<Event/>} />
        <Route path="/college/placements" element={<Placement/>} />
        {isLoggedIn && role === 'College' ? (
          <Route path="/courses" element={<Courses />} />
        ) : (
          <Route path="/courses" element={<Navigate to="/" replace />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
