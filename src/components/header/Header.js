import React from 'react';
import logo from '../../images/filmbase-logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__topbar"></div>
        <div className="header__navbar">
          <div className="header__logo">
            <img src={logo} alt="" />
            {/* Filmbase App */}
          </div>
          <div className="header__menu">
            <ul>
              <li className="header__menu-item">
                <a href="/nowplaying">Now Playing</a>
              </li>
              <li className="header__menu-item">Upcoming</li>
              <input
                className="header__search"
                type="text"
                placeholder="Search for a movie..."
              />
            </ul>
          </div>
          <div
            className="header__menu--mobile disabled"
            id="header__menu--mobile"
          >
            <span className="header__mobile-menu-item">Now Playing</span>
            <span className="header__mobile-menu-item">Upcoming</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
