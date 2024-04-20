import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContextProvider, useAuth } from './context/AuthContextProvider';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
