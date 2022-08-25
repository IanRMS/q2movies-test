import React, { useEffect, useState } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

import Modal from "components/modal";
import { apiMoviePath } from "utils/constants";
import { Movie } from "utils/interfaces";
import GlobalStyle from "./globalStyles";
import { getMovies } from "./services";
import {
  Bottom,
  Content,
  Header,
  Main,
  MoreInfoButton,
  MovieCard,
  MovieImage,
  MovieOriginalTitle,
  MoviesContainer,
  MovieTitle,
} from "./styles";
import Logo from "assets/project-logo.png";
import NotAvailable from "assets/default-image.jpg";
import Loading from "components/loading";

function App() {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [movieSelected, setMovieSelected] = useState<Movie | null>(null);
  const [index, setIndex] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);

  const handleMovies = async () => {
    setIsLoading(true);
    try {
      const { data } = await getMovies(index);
      setMoviesList(data.results);
      setTotalPages(data.total_pages);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectedMovie = (movie: Movie) => {
    setMovieSelected(movie);
  };

  useEffect(() => {
    handleMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <>
      <GlobalStyle />
      <Main>
        <Content>
          <Header>
            <img alt="Teste Front-End Ian Ribeiro" src={Logo} />
          </Header>
          <MoviesContainer>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {moviesList.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    onClick={() => handleSelectedMovie(movie)}
                  >
                    <MovieImage
                      alt={movie.title}
                      src={
                        movie.poster_path ? `${apiMoviePath}${movie.poster_path}` : NotAvailable
                      }
                    />
                    <MovieTitle>{movie.title}</MovieTitle>
                    <MovieOriginalTitle>
                      {movie.original_title}
                    </MovieOriginalTitle>
                    <MoreInfoButton onClick={() => handleSelectedMovie(movie)}>
                      Saber mais
                    </MoreInfoButton>
                  </MovieCard>
                ))}
              </>
            )}
          </MoviesContainer>
          <Bottom>
            <div>
              Página {index} de {totalPages}
            </div>
            <div>
              <button
                disabled={index === 1 || isLoading}
                onClick={() => setIndex(index - 1)}
              >
                <FaChevronCircleLeft />
              </button>
              <button
                disabled={index === totalPages || isLoading}
                onClick={() => setIndex(index + 1)}
              >
                <FaChevronCircleRight />
              </button>
            </div>
          </Bottom>
        </Content>
        {movieSelected && (
          <Modal movie={movieSelected} close={() => setMovieSelected(null)} />
        )}
      </Main>
    </>
  );
}

export default App;
