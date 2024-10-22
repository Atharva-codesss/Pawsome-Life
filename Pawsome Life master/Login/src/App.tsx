import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#b6f1c4] flex items-center justify-center">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;