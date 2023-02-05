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

import PageMovies1 from './pages/pageMovies1';
import PageMovies2 from './pages/pageMovies2';
import PageMovies3 from './pages/pageMovies3';
import PageMovies4 from './pages/pageMovies4';
import PageMovies5 from './pages/pageMovies5';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/movie1' element={<Movie1 />} />
          <Route path='/movie2' element={<Movie2 />} />
          <Route path='/movie3' element={<Movie3 />} />
          <Route path='/movie4' element={<Movie4 />} />
          <Route path='/movie5' element={<Movie5 />} />
          <Route path='/movie6' element={<Movie6 />} />
          <Route path='/movie7' element={<Movie7 />} />
          <Route path='/movie8' element={<Movie8 />} />
          <Route path='/movie9' element={<Movie9 />} />
          <Route path='/movie10' element={<Movie10 />} />
          <Route path='/movie11' element={<Movie11 />} />
          <Route path='/movie12' element={<Movie12 />} />
          <Route path='/movie13' element={<Movie13 />} />
          <Route path='/movie14' element={<Movie14 />} />
          <Route path='/movie15' element={<Movie15 />} />
          <Route path='/movie16' element={<Movie16 />} />
          <Route path='/movie17' element={<Movie17 />} />
          <Route path='/movie18' element={<Movie18 />} />
          <Route path='/movie19' element={<Movie19 />} />
          <Route path='/movie20' element={<Movie20 />} />
          <Route path='/movie21' element={<Movie21 />} />
          <Route path='/movie22' element={<Movie22 />} />
          <Route path='/movie23' element={<Movie23 />} />
          <Route path='/movie24' element={<Movie24 />} />
          <Route path='/movie25' element={<Movie25 />} />
          <Route path='/movie26' element={<Movie26 />} />
          <Route path='/movie27' element={<Movie27 />} />
          <Route path='/movie28' element={<Movie28 />} />
          <Route path='/movie29' element={<Movie29 />} />
          <Route path='/movie30' element={<Movie30 />} />
          <Route path='/movie31' element={<Movie31 />} />
          <Route path='/movie32' element={<Movie32 />} />
          <Route path='/movie33' element={<Movie33 />} />
          <Route path='/movie34' element={<Movie34 />} />
          <Route path='/movie35' element={<Movie35 />} />
          <Route path='/movie36' element={<Movie36 />} />
          <Route path='/movie37' element={<Movie37 />} />
          <Route path='/movie38' element={<Movie38 />} />
          <Route path='/movie39' element={<Movie39 />} />
          <Route path='/movie40' element={<Movie40 />} />

          <Route path='/pageMovies1' element={<PageMovies1 />} />
          <Route path='/pageMovies2' element={<PageMovies2 />} />
          <Route path='/pageMovies3' element={<PageMovies3 />} />
          <Route path='/pageMovies4' element={<PageMovies4 />} />
          <Route path='/pageMovies5' element={<PageMovies5 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
