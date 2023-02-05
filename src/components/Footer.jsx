import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import YT from '../img/yt.svg';
import insta from '../img/insta.svg';
import face from '../img/face.svg';

function Footer() {
  const [isOpen, setOpen] = useState(false);

  function handleMenu() {
    setOpen(!isOpen);
    return window.scrollTo(0, 0);
  }

  return (
    <div className='footer-container'>
      <div className='footer-info'>
        <div className='title'>
          <h1>IMDB API</h1>
        </div>

        <div className='menu-list-mailphone'>
          <h2>Contact</h2>
          <div className='mail-phone'>
            <p>+55 (11) 9 9999-9999</p>
            <p>example@email.com</p>
          </div>

          <div className='address'>
            <p>Cecelia Havens</p>
            <p>456 White Finch St.</p>
            <p>Oxford, UK 29860</p>
          </div>

          <div className='social'>
            <a href='https://youtube.com' target='_blank'>
              <img src={YT} alt='youtube icon' />
            </a>
            <a href='https://facebook.com' target='_blank'>
              <img src={face} alt='facebook icon' />
            </a>
            <a href='https://instagram.com' target='_blank'>
              <img src={insta} alt='instagram icon' />
            </a>
          </div>
        </div>

        <div className='menu-list-info'>
          <ul>
            <h2>Navigation</h2>
            <li onClick={handleMenu}>
              <Link to='/'>Home</Link>
              <Link to='/PageMovies1'>All movies</Link>
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

      <div className='credits'>
        <p>&copy; Todos os direitos reservados</p>
      </div>
    </div>
  );
}

export default Footer;
