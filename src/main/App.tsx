import React, { useEffect, useState } from 'react';
import { Movie } from '../utils/interfaces';
import GlobalStyle from './globalStyles';
import { getMovies } from './services';
import { Content, Main, MovieCard, MovieOriginalTitle, MoviesContainer, MovieTitle } from './styles';

function App() {

  const [moviesList, setMoviesList] = useState<Movie[]>([]);

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
            <MovieCard key={movie.id}>
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieOriginalTitle>{movie.original_title}</MovieOriginalTitle>
            </MovieCard>
          ))}
        </MoviesContainer>
      </Content>
    </Main>
    </>
  );
}

export default App;
