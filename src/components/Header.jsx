import React, { useState } from 'react';
import { Cross as Hamburger } from 'hamburger-react';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setOpen] = useState(false);

  function handleMenu() {
    setOpen(!isOpen);
    return window.scrollTo(0, 0);
  }

  function startOfPage() {
    return window.scrollTo(0, 0);
  }

  return (
    <div className='header-container'>
      <div className='menu-logo'>
        <Link
          to='/'
          onClick={startOfPage}
          className={isOpen ? 'hide-logo' : ''}
        >
          <img src={logo} alt='logo' />
        </Link>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      <div className={isOpen ? 'menu-open' : 'menu-close'}>
        <ul className='menu-list'>
          <li onClick={handleMenu}>
            <Link to='/'>Home</Link>

            <Link to='/pageMovies1'>All movies</Link>
            <a href='https://imdb-api.com/' target='_blank'>
              API
            </a>
            <a href='https://imdb.com/' target='_blank'>
              Imdb
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
