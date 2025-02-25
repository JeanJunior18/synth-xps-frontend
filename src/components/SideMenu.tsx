import logout from '../utils/logout';
import './SideMenu.css';

interface SideMenuProps {
  isOpen: boolean;
}

const SideMenu = ({ isOpen }: SideMenuProps) => {
  const handleAddTimbre = () => {
    window.location.href = '/register';
  };

  const handleLogout = () => {
    logout()
  };

  return (
    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=YDZMvLWHQf4" target="_blank" rel="noopener noreferrer">XPS10 Patch</a></li>
        <li><a href="https://www.youtube.com/watch?v=5UQUY472ydM&t=4s" target="_blank" rel="noopener noreferrer">XPS10 Performance</a></li>
        {/* Adicione mais links conforme necessário */}
      </ul>

      <div className="side-menu-actions">
        <button onClick={handleAddTimbre} className="add-timbre-btn">Adicionar Timbre</button>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default SideMenu;
