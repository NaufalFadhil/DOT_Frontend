import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import AuthContext from './context/AuthContext';

function App() {
  const [token, setToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
    }
  }, []);
  
  const contextValue = React.useMemo(() => {
    return {
      token,
      setToken
    }
  }, [token]);

  return (
    <AuthContext.Provider value={contextValue}>
      <div className="App">
        <main>
          {(token === null) ? (
            <Routes>
              <Route path="/*" element={<LoginPage />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<ProfilePage />} />
              <Route path="/profiles" element={<ProfilePage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          )}
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
