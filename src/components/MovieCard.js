import React, { useState } from 'react';
import MovieDetail from './MovieDetail';

const MovieCard = ({ movie }) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const movieName = movie.Title.substring(0, 50);

    return (
        <div className="movie-card">
            <div className="card">
                <div className="card-img">
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
                <h3 id="movie-title">
                    {movieName.length >= 15 ? `${movieName}...` : movieName}
                </h3>
            </div>
            <div className="card-btn">
                <button className="btn fill" onClick={handleOpenModal}>
                    View Details
                </button>
                {showModal && (
                    <MovieDetail
                        movieId={movie.imdbID}
                        onClose={handleCloseModal}
                    />
                )}
            </div>
        </div>
    );
};

export default MovieCard;
