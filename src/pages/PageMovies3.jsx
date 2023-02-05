import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import next from '../img/next.svg';
import previous from '../img/previous.svg';

function PageMovies3() {
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
          <Link to='/movie17' onClick={startOfPage}>
            <img src={image[16]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie17' onClick={startOfPage}>
              <h2>17. {title[16]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[16]}</p>
              <StarRatings
                rating={rating[16]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[16]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[16]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie17' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie18' onClick={startOfPage}>
            <img src={image[17]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie18' onClick={startOfPage}>
              <h2>18. {title[17]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[17]}</p>
              <StarRatings
                rating={rating[17]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[17]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[17]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie18' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie19' onClick={startOfPage}>
            <img src={image[18]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie19' onClick={startOfPage}>
              <h2>19. {title[18]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[18]}</p>
              <StarRatings
                rating={rating[18]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[18]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[18]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie19' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie20' onClick={startOfPage}>
            <img src={image[19]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie20' onClick={startOfPage}>
              <h2>20. {title[19]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[19]}</p>
              <StarRatings
                rating={rating[19]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[19]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[19]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie20' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie21' onClick={startOfPage}>
            <img src={image[20]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie21' onClick={startOfPage}>
              <h2>21. {title[20]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[20]}</p>
              <StarRatings
                rating={rating[20]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[20]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[20]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie21' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie22' onClick={startOfPage}>
            <img src={image[21]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie22' onClick={startOfPage}>
              <h2>22. {title[21]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[21]}</p>
              <StarRatings
                rating={rating[21]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[21]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[21]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie22' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie23' onClick={startOfPage}>
            <img src={image[22]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie23' onClick={startOfPage}>
              <h2>23. {title[22]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[22]}</p>
              <StarRatings
                rating={rating[22]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[22]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[22]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie23' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container last'>
          <Link to='/movie24' onClick={startOfPage}>
            <img src={image[23]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie24' onClick={startOfPage}>
              <h2>24. {title[23]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[23]}</p>
              <StarRatings
                rating={rating[23]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[23]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[23]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie24' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <div className='mavigation-container'>
          <ul className='navigation'>
            <li className='previous'>
              <Link to='/PageMovies2' onClick={startOfPage}>
                <img src={previous} />
              </Link>
            </li>
            <li className='current'>
              <Link to='#'>3</Link>
            </li>
            <li className='next'>
              <Link to='/PageMovies4' onClick={startOfPage}>
                <img src={next} />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default PageMovies3;
