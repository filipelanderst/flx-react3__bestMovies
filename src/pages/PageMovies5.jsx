import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import next from '../img/next.svg';
import previous from '../img/previous.svg';

function PageMovies5() {
  const [id, setId] = useState([]);
  const [title, setTitle] = useState([]);
  const [image, setImage] = useState([]);
  const [rating, setRating] = useState([]);
  const [ratingCount, setRatingCount] = useState([]);
  const [plot, setPlot] = useState([]);

  function startOfPage() {
    return window.scrollTo(0, 0);
  }

  useEffect(() => {
    const fetchData = async () => {
      const url =
        'https://raw.githubusercontent.com/flx-lander7/resources/main/img-bestMovies/popularMovies.json';

      const response = await fetch(url);
      const data = await response.json();
      const arrayData = data.items;

      const ids = arrayData.map((item) => {
        return item.id;
      });

      const titles = arrayData.map((item) => {
        return item.title;
      });

      const images = arrayData.map((item) => {
        return item.image;
      });

      const ratings = arrayData.map((item) => {
        return item.imDbRating / 2;
      });

      const ratingsCount = arrayData.map((item) => {
        return item.imDbRatingCount;
      });

      const plots = arrayData.map((item) => {
        return item.plot;
      });

      setId(ids);
      setTitle(titles);
      setImage(images);
      setRating(ratings);
      setRatingCount(ratingsCount);
      setPlot(plots);
    };
    fetchData();
  }, []);

  return (
    <div className='allmovies-container'>
      <div className='title'>
        <h1>All Movies</h1>
      </div>
      <section className='content'>
        <article className='movie-container'>
          <Link to='/movie33' onClick={startOfPage}>
            <img src={image[32]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie33' onClick={startOfPage}>
              <h2>33. {title[32]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[32]}</p>
              <StarRatings
                rating={rating[32]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[32]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[32]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie33' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie34' onClick={startOfPage}>
            <img src={image[33]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie34' onClick={startOfPage}>
              <h2>34. {title[33]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[33]}</p>
              <StarRatings
                rating={rating[33]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[33]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[33]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie34' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie35' onClick={startOfPage}>
            <img src={image[34]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie35' onClick={startOfPage}>
              <h2>35. {title[34]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[34]}</p>
              <StarRatings
                rating={rating[34]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[34]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[34]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie35' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie36' onClick={startOfPage}>
            <img src={image[35]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie36' onClick={startOfPage}>
              <h2>36. {title[35]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[35]}</p>
              <StarRatings
                rating={rating[35]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[35]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[35]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie36' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie37' onClick={startOfPage}>
            <img src={image[36]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie37' onClick={startOfPage}>
              <h2>37. {title[36]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[36]}</p>
              <StarRatings
                rating={rating[36]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[36]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[36]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie37' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie38' onClick={startOfPage}>
            <img src={image[37]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie38' onClick={startOfPage}>
              <h2>38. {title[37]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[37]}</p>
              <StarRatings
                rating={rating[37]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[37]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[37]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie38' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie39' onClick={startOfPage}>
            <img src={image[38]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie39' onClick={startOfPage}>
              <h2>39. {title[38]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[38]}</p>
              <StarRatings
                rating={rating[38]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[38]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[38]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie39' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container last'>
          <Link to='/movie40' onClick={startOfPage}>
            <img src={image[39]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie40' onClick={startOfPage}>
              <h2>40. {title[39]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[39]}</p>
              <StarRatings
                rating={rating[39]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[39]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[39]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie40' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <div className='mavigation-container'>
          <ul className='navigation'>
            <li className='previous'>
              <Link to='/PageMovies4' onClick={startOfPage}>
                <img src={previous} />
              </Link>
            </li>
            <li className='current'>
              <Link to='#'>5</Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default PageMovies5;
