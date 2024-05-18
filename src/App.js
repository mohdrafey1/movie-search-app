import React, { useState, useEffect } from 'react';
import MovieContextProvider from './components/MovieContextProvider';
import MovieList from './components/MovieList';
import SearchForm from './components/SearchForm';
import axios from 'axios';
import './App.css';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('Avengers');
    const [isError, setIsError] = useState({ show: false, msg: '' });

    useEffect(() => {
        const getMovies = async (url) => {
            try {
                const response = await axios.get(`${API_URL}&s=${searchQuery}`);
                const data = response.data;
                console.log(data);
                if (data.Response === 'True') {
                    setIsError({
                        show: false,
                        msg: data.Error,
                    });
                    setMovies(data.Search);
                } else {
                    setIsError({
                        show: true,
                        msg: data.Error,
                    });
                }
            } catch (error) {
                console.log(error);
            }
        };
        getMovies();
    }, [searchQuery]);

    return (
        <MovieContextProvider
            value={{ movies, isError, searchQuery, setSearchQuery }}
        >
            <div className="App">
                <SearchForm />
                {isError.show && <p className="error">{isError.msg}</p>}
                <MovieList />
            </div>
        </MovieContextProvider>
    );
};

export default App;
