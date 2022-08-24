import React, { useEffect, useState } from 'react';
import { apiMoviePath } from '../utils/constants';
import { Movie } from '../utils/interfaces';
import GlobalStyle from './globalStyles';
import { getMovies } from './services';
import { Content, Main, MoreInfoButton, MovieCard, MovieImage, MovieOriginalTitle, MoviesContainer, MovieTitle } from './styles';

function App() {

  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [movieSelected, setMovieSelected] = useState<Movie | null>(null);

  const handleMovies = async () => {
    try {
      const {data} = await getMovies();
      setMoviesList(data.results)
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      console.log('acabou')
    }
  }

  const handleSelectedMovie = (movie:Movie) => {
    setMovieSelected(movie);
    console.log('Movie', movie);
  }

  useEffect(() => {
    handleMovies()
  },[])

  return (
    <>
    <GlobalStyle/>
    <Main>
      <Content>
        <MoviesContainer>
          {moviesList.map((movie) => (
            <MovieCard key={movie.id} onClick={() => handleSelectedMovie(movie)}>
              <MovieImage alt={movie.title} src={`${apiMoviePath}${movie.poster_path}`} />
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieOriginalTitle>{movie.original_title}</MovieOriginalTitle>
              <MoreInfoButton onClick={() => handleSelectedMovie(movie)}>
                Saber mais
              </MoreInfoButton>
            </MovieCard>
          ))}
        </MoviesContainer>
      </Content>
    </Main>
    </>
  );
}

export default App;
