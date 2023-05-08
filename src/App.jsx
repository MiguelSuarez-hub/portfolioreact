import { React, useState } from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainInfo from './components/MainInfo';

import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <>
      <Header theme={theme} setTheme={setTheme}/>
      <Sidebar theme={theme}/>
      <main className={theme}>
        <MainInfo/>
      </main>
      
    </>
  )
}

export default App
