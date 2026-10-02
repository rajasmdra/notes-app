import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ArchivedPage from './pages/ArchivedPage';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Notes App</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/archived' element={<ArchivedPage />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
