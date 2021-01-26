import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import uuid from 'react-uuid';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import VerifiedUserSidebarData from './VerifiedUserSidebarData';
import './Navbar.css';
import logo from '../logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function Navbar() {
  const classes = useStyles();
  const history = useHistory();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const HandleLogout = () => {
    const token = localStorage.getItem('token');
    axios({
      method: 'post',
      url: 'http://127.0.0.1:5005/admin/auth/logout',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      // eslint-disable-next-line
      console.log(response);
      history.push('/');
    }).catch((err) => {
      // eslint-disable-next-line
      console.log(err);
    });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <img
            className="login-header-logo"
            src={logo}
            alt="BigBrain logo"
          />
          <Typography variant="h6" color="inherit">
            BigBrain
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          />
          <FaIcons.FaBars onClick={showSidebar} />
          <nav className={sidebar ? 'admin-nav-menu active' : 'admin-nav-menu'}>
            <ul className="admin-nav-menu-items">
              <li className="admin-navbar-toggle">
                <Link to="/admin" className="admin-menu-bars">
                  <AiIcons.AiOutlineClose onClick={showSidebar} />
                </Link>
              </li>
              {VerifiedUserSidebarData.map((item) => (
                <li key={uuid()} className={item.cName}>
                  <Link to={item.path} className="nav-button">
                    {item.icon}
                    <span>
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="admin-navbar-toggle">
                <span>
                  <button type="button" onClick={HandleLogout}>
                    Logout
                  </button>
                </span>
              </li>
            </ul>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
