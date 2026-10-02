import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import NotesPageWrapper from './pages/NotesPage';


function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Notes App</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<NotesPageWrapper archived={false}/>}/>
          <Route path='/archived' element={<NotesPageWrapper archived={true}/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
