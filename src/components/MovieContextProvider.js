import React, { createContext } from 'react';

export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

export const MovieContext = createContext();

const MovieContextProvider = ({ children, value }) => {
    return (
        <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
    );
};

export default MovieContextProvider;
