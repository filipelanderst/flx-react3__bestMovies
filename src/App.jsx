import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

import Home from './pages/Home';

import Movie1 from './pages/Movie1';
import Movie2 from './pages/Movie2';
import Movie3 from './pages/Movie3';
import Movie4 from './pages/Movie4';
import Movie5 from './pages/Movie5';
import Movie6 from './pages/Movie6';
import Movie7 from './pages/Movie7';
import Movie8 from './pages/Movie8';
import Movie9 from './pages/Movie9';
import Movie10 from './pages/Movie10';
import Movie11 from './pages/Movie11';
import Movie12 from './pages/Movie12';
import Movie13 from './pages/Movie13';
import Movie14 from './pages/Movie14';
import Movie15 from './pages/Movie15';
import Movie16 from './pages/Movie16';
import Movie17 from './pages/Movie17';
import Movie18 from './pages/Movie18';
import Movie19 from './pages/Movie19';
import Movie20 from './pages/Movie20';
import Movie21 from './pages/Movie21';
import Movie22 from './pages/Movie22';
import Movie23 from './pages/Movie23';
import Movie24 from './pages/Movie24';
import Movie25 from './pages/Movie25';
import Movie26 from './pages/Movie26';
import Movie27 from './pages/Movie27';
import Movie28 from './pages/Movie28';
import Movie29 from './pages/Movie29';
import Movie30 from './pages/Movie30';
import Movie31 from './pages/Movie31';
import Movie32 from './pages/Movie32';
import Movie33 from './pages/Movie33';
import Movie34 from './pages/Movie34';
import Movie35 from './pages/Movie35';
import Movie36 from './pages/Movie36';
import Movie37 from './pages/Movie37';
import Movie38 from './pages/Movie38';
import Movie39 from './pages/Movie39';
import Movie40 from './pages/Movie40';

import PageMovies1 from './pages/PageMovies1';
import PageMovies2 from './pages/PageMovies2';
import PageMovies3 from './pages/PageMovies3';
import PageMovies4 from './pages/PageMovies4';
import PageMovies5 from './pages/PageMovies5';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/Movie1' element={<Movie1 />} />
          <Route path='/Movie2' element={<Movie2 />} />
          <Route path='/Movie3' element={<Movie3 />} />
          <Route path='/Movie4' element={<Movie4 />} />
          <Route path='/Movie5' element={<Movie5 />} />
          <Route path='/Movie6' element={<Movie6 />} />
          <Route path='/Movie7' element={<Movie7 />} />
          <Route path='/Movie8' element={<Movie8 />} />
          <Route path='/Movie9' element={<Movie9 />} />
          <Route path='/Movie10' element={<Movie10 />} />
          <Route path='/Movie11' element={<Movie11 />} />
          <Route path='/Movie12' element={<Movie12 />} />
          <Route path='/Movie13' element={<Movie13 />} />
          <Route path='/Movie14' element={<Movie14 />} />
          <Route path='/Movie15' element={<Movie15 />} />
          <Route path='/Movie16' element={<Movie16 />} />
          <Route path='/Movie17' element={<Movie17 />} />
          <Route path='/Movie18' element={<Movie18 />} />
          <Route path='/Movie19' element={<Movie19 />} />
          <Route path='/Movie20' element={<Movie20 />} />
          <Route path='/Movie21' element={<Movie21 />} />
          <Route path='/Movie22' element={<Movie22 />} />
          <Route path='/Movie23' element={<Movie23 />} />
          <Route path='/Movie24' element={<Movie24 />} />
          <Route path='/Movie25' element={<Movie25 />} />
          <Route path='/Movie26' element={<Movie26 />} />
          <Route path='/Movie27' element={<Movie27 />} />
          <Route path='/Movie28' element={<Movie28 />} />
          <Route path='/Movie29' element={<Movie29 />} />
          <Route path='/Movie30' element={<Movie30 />} />
          <Route path='/Movie31' element={<Movie31 />} />
          <Route path='/Movie32' element={<Movie32 />} />
          <Route path='/Movie33' element={<Movie33 />} />
          <Route path='/Movie34' element={<Movie34 />} />
          <Route path='/Movie35' element={<Movie35 />} />
          <Route path='/Movie36' element={<Movie36 />} />
          <Route path='/Movie37' element={<Movie37 />} />
          <Route path='/Movie38' element={<Movie38 />} />
          <Route path='/Movie39' element={<Movie39 />} />
          <Route path='/Movie40' element={<Movie40 />} />

          <Route path='/PageMovies1' element={<PageMovies1 />} />
          <Route path='/PageMovies2' element={<PageMovies2 />} />
          <Route path='/PageMovies3' element={<PageMovies3 />} />
          <Route path='/PageMovies4' element={<PageMovies4 />} />
          <Route path='/PageMovies5' element={<PageMovies5 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
