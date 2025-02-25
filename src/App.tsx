import { useState } from 'react';
import './App.css';
import SideMenu from './components/SideMenu.tsx';
import ContentSection from './components/ContentSection';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className="App">
      <SideMenu isOpen={menuOpen} />
      <div className="content">
        <header className="header">
          <button onClick={toggleMenu}>☰</button>
          <h1>Loja de Timbres</h1>
        </header>
        <ContentSection />
      </div>
    </div>
  );
}

export default App;
