import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';
import { API_URL } from './MovieContextProvider';

const MovieDetail = ({ movieId, onClose }) => {
    const [movie, setMovie] = useState(null);
    const [isError, setIsError] = useState({ show: false, msg: '' });

    useEffect(() => {
        const getMovieDetails = async (id) => {
            try {
                const response = await axios.get(`${API_URL}&i=${id}`);
                const data = response.data;
                if (data.Response === 'True') {
                    setMovie(data);
                    setIsError({ show: false, msg: '' });
                } else {
                    setIsError({ show: true, msg: data.Error });
                }
            } catch (error) {
                setIsError({ show: true, msg: error.message });
            }
        };

        getMovieDetails(movieId);
    }, [movieId]);

    if (!movie) return null;

    return (
        <ReactModal
            isOpen
            onRequestClose={onClose}
            ariaHideApp={false}
            className="modal"
            overlayClassName="overlay"
            contentLabel="Movie Detail Modal"
            center
        >
            {isError.show ? (
                <p className="error">{isError.msg}</p>
            ) : (
                <div className="movie-detail">
                    <div className="movie-detail-card">
                        <div className="movie-detail-image">
                            <figure>
                                <img
                                    src={movie.Poster}
                                    alt={movie.Title}
                                    className="movie-poster"
                                />
                            </figure>
                        </div>
                        <div className="card-content">
                            <h2 className="title">{movie.Title}</h2>
                            <p className="card-text">
                                <strong>Released:</strong> {movie.Released}
                            </p>
                            <p className="card-text">
                                <strong>Genre:</strong> {movie.Genre}
                            </p>
                            <p className="card-text">
                                <strong>IMDb Rating:</strong> {movie.imdbRating}
                            </p>
                            <p className="card-text">
                                <strong>Country:</strong> {movie.Country}
                            </p>
                            <p className="card-text">
                                <strong>Plot:</strong> {movie.Plot}
                            </p>
                        </div>
                    </div>
                    <div className="movie-btn">
                        <button onClick={onClose} className="close-btn">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </ReactModal>
    );
};

export default MovieDetail;
