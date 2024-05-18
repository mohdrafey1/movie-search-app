import React, { useContext } from 'react';
import { MovieContext } from './MovieContextProvider';
import MovieCard from './MovieCard';
import '../App.css';

const MovieList = () => {
    const { movies } = useContext(MovieContext);

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
