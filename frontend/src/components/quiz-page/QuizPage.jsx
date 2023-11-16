import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Poster from "../poster/Poster";
import Clues from "../Clues/Clues";
import Input from "../Input/Input";
import ResultPopUp from "../ResultPopUp/ResultPopUp";
import RankingPage from "../RankingPage/RankingPage";

// Movie list that will be replaced by API calls
import "./QuizPage.css";

function QuizPage() {
  // Index used to switch movies during the game
  const [questionIndex, setQuestionIndex] = useState(1);
  // Question state, true when the user answered correctly or timer reached 0
  const [questionOver, setQuestionOver] = useState(false);
  // Game state, true when the game is over
  const [gameOver, setGameOver] = useState(false);
  // User score
  const [movie, setMovie] = useState(null);
  const [movieCast, setMovieCast] = useState(null);
  const [movieDirector, setMovieDirector] = useState(null);
  const [movieGenres, setMovieGenres] = useState(null);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTAzZGExODJkODUyNWQ2YzBiYTZlNzNiY2Q1YjA4MSIsInN1YiI6IjY1NGI1NWQ2NDFhNTYxMzM2ZDg2NjA3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3C9MzFQ-cGmIQFXHUAvhGaJRqQXR3suZ9u-aApF70R8",
    },
  };

  function getGenre(genreList, movieGenre) {
    const genres = genreList.filter((genre) => movieGenre.includes(genre.id));
    return genres.length > 1
      ? `${genres[0].name} / ${genres[1].name}`
      : genres[0].name;
  }

  useEffect(() => {
    const randomMovie = Math.floor(Math.random() * 20);
    const randomPage = Math.floor(Math.random() * 40) + 1;

    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=${randomPage}&sort_by=popularity.desc&vote_count.gte=5000`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovie(response.results[randomMovie]);
      })
      .catch((err) => console.error(err));
  }, [questionIndex]);

  useEffect(() => {
    if (movie) {
      fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/credits?language=en-US`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          const movieActors = [];
          movieActors.push(response.cast[0].name);
          movieActors.push(response.cast[1].name);
          setMovieCast(movieActors);
          setMovieDirector(
            response.crew.filter((crew) => crew.job === "Director")
          );
        })
        .catch((err) => console.error(err));

      fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=fr-FR",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          const movieCategory = getGenre(response.genres, movie.genre_ids);
          setMovieGenres(movieCategory);
        })
        .catch((err) => console.error(err));
    }
  }, [movie]);

  // Resets questionOver state on question switch
  useEffect(() => {
    setQuestionOver(false);
  }, [questionIndex]);

  return (
    movie && (
      <section className="quizpage_container">
        <Navbar
          gameOver={gameOver}
          setGameOver={setGameOver}
          questionIndex={questionIndex}
          questionOver={questionOver}
          setQuestionOver={setQuestionOver}
        />
        <Poster poster={movie.poster_path} questionOver={questionOver} />
        {movieDirector && movieGenres && movieCast && (
          <Clues
            movieDate={movie.release_date}
            movieDirector={movieDirector[0].name}
            movieGenres={movieGenres}
            movieCast={`${movieCast[0]} / ${movieCast[1]}`}
            questionOver={questionOver}
          />
        )}
        <Input
          movieTitle={movie.title}
          movieOriginalTitle={movie.original_title}
          setGameOver={setGameOver}
          questionIndex={questionIndex}
          questionOver={questionOver}
          setQuestionOver={setQuestionOver}
        />
        <ResultPopUp
          gameOver={gameOver}
          questionIndex={questionIndex}
          setQuestionIndex={setQuestionIndex}
          questionOver={questionOver}
          setQuestionOver={setQuestionOver}
        />
        <RankingPage gameOver={gameOver} />
      </section>
    )
  );
}

export default QuizPage;
