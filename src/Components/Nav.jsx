import React from 'react';
import classes from './Nav.module.css';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.png';

const Nav = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.name}>
        <Link className={classes.link} to='/home'>
          <img className={classes.onlyLogo} src={Logo} alt='' />
        </Link>
      </div>
      <div className={classes.menu}>
        <span className={classes.menuList}>
          <Link className={classes.link} to='/home'>
            Home
          </Link>
        </span>
        <span className={classes.menuList}>
          <Link className={classes.link} to='/upload'>
            Upload
          </Link>
        </span>
        <span className={classes.menuList}>
          <Link className={classes.link} to='/season1'>
            Season 1
          </Link>
        </span>
        <span className={classes.menuList}>
          <Link className={classes.link} to='/about'>
            About
          </Link>
        </span>
        <span className={classes.menuList}>
          <Link className={classes.link} to='/contact'>
            Contact
          </Link>
        </span>
      </div>
      <span className={classes.rightMenu}>
        <Menu />
      </span>
    </div>
  );
};

export default Nav;
