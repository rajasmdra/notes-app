import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import NotesPageWrapper from './pages/NotesPage';
import AddPage from './pages/AddPage';
import DetailPageWrapper from './pages/DetailPage.jsx';



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
          <Route path='/add' element={<AddPage/>}/>
          <Route path='/notes/:id/' element={<DetailPageWrapper />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
