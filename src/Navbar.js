import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              ödünç al
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              iade et
            </button>
          </li>
          
        </ul>
        <div style={{ display: 'flex', gap: '10px' }}>
          <a href="https://dr.alperbasturk.com/" style={{ color: 'white', backgroundColor: '#007bff', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none' }}>
            Giriş Yap
          </a>
          <a href="https://www.example.com/register" style={{ color: 'white', backgroundColor: '#007bff', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none' }}>
            Kayıt Ol
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
