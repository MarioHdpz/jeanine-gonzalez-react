import React from 'react';
import Header from './components/Header';
import Events from './components/Events';
import Profile from './components/Profile';
import Banner from './components/Banner';
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Events />
    </div>
  );
}

export default App;
