import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import next from '../img/next.svg';
import previous from '../img/previous.svg';

function PageMovies4() {
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
          <Link to='/movie25' onClick={startOfPage}>
            <img src={image[24]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie25' onClick={startOfPage}>
              <h2>25. {title[24]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[24]}</p>
              <StarRatings
                rating={rating[24]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[24]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[24]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie25' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie26' onClick={startOfPage}>
            <img src={image[25]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie26' onClick={startOfPage}>
              <h2>26. {title[25]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[25]}</p>
              <StarRatings
                rating={rating[25]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[25]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[25]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie26' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie27' onClick={startOfPage}>
            <img src={image[26]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie27' onClick={startOfPage}>
              <h2>27. {title[26]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[26]}</p>
              <StarRatings
                rating={rating[26]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[26]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[26]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie27' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie28' onClick={startOfPage}>
            <img src={image[27]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie28' onClick={startOfPage}>
              <h2>28. {title[27]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[27]}</p>
              <StarRatings
                rating={rating[27]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[27]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[27]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie28' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie29' onClick={startOfPage}>
            <img src={image[28]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie29' onClick={startOfPage}>
              <h2>29. {title[28]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[28]}</p>
              <StarRatings
                rating={rating[28]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[28]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[28]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie29' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie30' onClick={startOfPage}>
            <img src={image[29]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie30' onClick={startOfPage}>
              <h2>30. {title[29]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[29]}</p>
              <StarRatings
                rating={rating[29]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[29]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[29]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie30' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie31' onClick={startOfPage}>
            <img src={image[30]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie31' onClick={startOfPage}>
              <h2>31. {title[30]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[30]}</p>
              <StarRatings
                rating={rating[30]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[30]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[30]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie31' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container last'>
          <Link to='/movie32' onClick={startOfPage}>
            <img src={image[31]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie32' onClick={startOfPage}>
              <h2>32. {title[31]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[31]}</p>
              <StarRatings
                rating={rating[31]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[31]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[31]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie32' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <div className='mavigation-container'>
          <ul className='navigation'>
            <li className='previous'>
              <Link to='/pageMovies3' onClick={startOfPage}>
                <img src={previous} />
              </Link>
            </li>
            <li className='current'>
              <Link to='#'>4</Link>
            </li>
            <li className='next'>
              <Link to='/pageMovies5' onClick={startOfPage}>
                <img src={next} />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default PageMovies4;
