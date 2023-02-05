import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import next from '../img/next.svg';
import previous from '../img/previous.svg';

function PageMovies2() {
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
        <h1 translate='no'>All Movies</h1>
      </div>
      <section className='content'>
        <article className='movie-container'>
          <Link to='/movie9' onClick={startOfPage}>
            <img src={image[8]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie9' onClick={startOfPage}>
              <h2>9. {title[8]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[8]}</p>
              <StarRatings
                rating={rating[8]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[8]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[8]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie9' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie10' onClick={startOfPage}>
            <img src={image[9]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie10' onClick={startOfPage}>
              <h2>10. {title[9]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[9]}</p>
              <StarRatings
                rating={rating[9]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[9]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[9]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie10' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie11' onClick={startOfPage}>
            <img src={image[10]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie11' onClick={startOfPage}>
              <h2>11. {title[10]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[10]}</p>
              <StarRatings
                rating={rating[10]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[10]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[10]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie11' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie12' onClick={startOfPage}>
            <img src={image[11]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie12' onClick={startOfPage}>
              <h2>12. {title[11]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[11]}</p>
              <StarRatings
                rating={rating[11]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[11]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[11]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie12' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie13' onClick={startOfPage}>
            <img src={image[12]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie13' onClick={startOfPage}>
              <h2>13. {title[12]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[12]}</p>
              <StarRatings
                rating={rating[12]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[12]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[12]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie13' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie14' onClick={startOfPage}>
            <img src={image[13]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie14' onClick={startOfPage}>
              <h2>14. {title[13]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[13]}</p>
              <StarRatings
                rating={rating[13]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[13]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[13]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie14' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie15' onClick={startOfPage}>
            <img src={image[14]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie15' onClick={startOfPage}>
              <h2>15. {title[14]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[14]}</p>
              <StarRatings
                rating={rating[14]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[14]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[14]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie15' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container last'>
          <Link to='/movie16' onClick={startOfPage}>
            <img src={image[15]} loading='lazy' />
          </Link>
          <div className='movie-info'>
            <Link to='/movie16' onClick={startOfPage}>
              <h2>16. {title[15]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[15]}</p>
              <StarRatings
                rating={rating[15]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[15]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[15]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie16' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <div className='mavigation-container'>
          <ul className='navigation'>
            <li className='previous'>
              <Link to='/PageMovies1' onClick={startOfPage}>
                <img src={previous} />
              </Link>
            </li>
            <li className='current'>
              <Link to='#'>2</Link>
            </li>
            <li className='next'>
              <Link to='/PageMovies3' onClick={startOfPage}>
                <img src={next} />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default PageMovies2;
