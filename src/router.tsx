import { JSX } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import App from './App';
import TimbreRegistration from './pages/TimbreRegistration';


const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute><App /></PrivateRoute>} />
        <Route path="/register" element={<PrivateRoute><TimbreRegistration /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
