import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import SidebarData from './SidebarData';
import './LoginHeader.css';

function LoginHeader() {
  const [sidebar, setSidebar] = useState(false);

  const ShowSidebar = () => {
    setSidebar(!sidebar);
    // eslint-disable-next-line
    console.log('click');
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Link to="/" className="menu-bars">
            <FaIcons.FaBars onClick={ShowSidebar} />
          </Link>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                <Link to="/" className="menu-bars">
                  <AiIcons.AiOutlineClose onClick={ShowSidebar} />
                </Link>
              </li>
              {SidebarData.map((item) => (
                <li key={uuid()} className={item.cName}>
                  <Link to={item.path} className="nav-button" onClick={ShowSidebar}>
                    {item.icon}
                    <span>
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default LoginHeader;
