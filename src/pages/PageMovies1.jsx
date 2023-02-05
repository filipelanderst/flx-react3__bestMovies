import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import next from '../img/next.svg';

function PageMovies1() {
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
          <Link to='/movie1' onClick={startOfPage}>
            <img src={image[0]} />
          </Link>
          <div className='movie-info'>
            <Link to='/movie1' onClick={startOfPage}>
              <h2>1. {title[0]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[0]}</p>
              <StarRatings
                rating={rating[0]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[0]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[0]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie1' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie2' onClick={startOfPage}>
            <img src={image[1]} />
          </Link>
          <div className='movie-info'>
            <Link to='/movie2' onClick={startOfPage}>
              <h2>2. {title[1]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[1]}</p>
              <StarRatings
                rating={rating[1]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[1]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[1]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie2' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie3' onClick={startOfPage}>
            <img src={image[2]} />
          </Link>
          <div className='movie-info'>
            <Link to='/movie3' onClick={startOfPage}>
              <h2>3. {title[2]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[2]}</p>
              <StarRatings
                rating={rating[2]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[2]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[2]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie3' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie4' onClick={startOfPage}>
            <img src={image[3]} />
          </Link>
          <div className='movie-info'>
            <Link to='/movie4' onClick={startOfPage}>
              <h2>4. {title[3]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[3]}</p>
              <StarRatings
                rating={rating[3]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[3]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[3]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie4' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie5' onClick={startOfPage}>
            <img src={image[4]} />
          </Link>
          <div className='movie-info'>
            <Link to='/movie5' onClick={startOfPage}>
              <h2>5. {title[4]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[4]}</p>
              <StarRatings
                rating={rating[4]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[4]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[4]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie5' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie6' onClick={startOfPage}>
            <img src={image[5]} />
          </Link>
          <div className='movie-info'>
            <Link to='/movie6' onClick={startOfPage}>
              <h2>6. {title[5]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[5]}</p>
              <StarRatings
                rating={rating[5]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[5]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[5]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie6' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container'>
          <Link to='/movie7' onClick={startOfPage}>
            <img src={image[6]} />
          </Link>
          <div className='movie-info'>
            <Link to='/movie7' onClick={startOfPage}>
              <h2>7. {title[6]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[6]}</p>
              <StarRatings
                rating={rating[6]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[6]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[6]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie7' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <article className='movie-container last'>
          <Link to='/movie8' onClick={startOfPage}>
            <img src={image[7]} />
          </Link>
          <div className='movie-info'>
            <Link to='/movie8' onClick={startOfPage}>
              <h2>8. {title[7]} </h2>
            </Link>
            <div className='rating'>
              <p> {rating[7]}</p>
              <StarRatings
                rating={rating[7]}
                starDimension='16px'
                starSpacing='0.8px'
                starRatedColor='#faaf00'
              />
            </div>
            <p className='reviews'>
              <span>{ratingCount[7]} reviews</span>
            </p>
            <div className='movie-description'>
              <p>{plot[7]}</p>
            </div>

            <div className='read-more'>
              <Link to='/movie8' onClick={startOfPage}>
                Read More
              </Link>
            </div>
          </div>
        </article>

        <div className='mavigation-container'>
          <ul className='navigation'>
            <li className='current'>
              <Link to='#'>1</Link>
            </li>
            <li className='next'>
              <Link to='/PageMovies2' onClick={startOfPage}>
                <img src={next} />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default PageMovies1;
