import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { MovieContext, API_URL } from './MovieContextProvider';
import '../App.css';

const SearchForm = () => {
    const { setSearchQuery } = useContext(MovieContext);
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (query.length > 2) {
                try {
                    const response = await axios.get(`${API_URL}&s=${query}`);
                    const data = response.data;
                    if (data.Response === 'True') {
                        setSuggestions(data.Search);
                    } else {
                        setSuggestions([]);
                    }
                } catch (error) {
                    console.log(error);
                    setSuggestions([]);
                }
            } else {
                setSuggestions([]);
            }
        };

        const delayDebounceFn = setTimeout(() => {
            fetchSuggestions();
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [query]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchQuery(query);
        setSuggestions([]);
        setQuery('');
    };

    const handleSelectSuggestion = (title) => {
        setQuery(title);
        setSearchQuery(title);
        setSuggestions([]);
        setQuery('');
    };

    return (
        <div>
            <form id="search-form" onSubmit={handleSubmit}>
                <div className="search-bar">
                    <div className="search-input">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search for a movie"
                        />
                    </div>
                    <div className="searchbtn">
                        <button type="submit">Search</button>
                    </div>
                </div>
                {suggestions.length > 0 && (
                    <ul className="suggestions-list">
                        {suggestions.map((suggestion) => (
                            <li
                                key={suggestion.imdbID}
                                onClick={() =>
                                    handleSelectSuggestion(suggestion.Title)
                                }
                            >
                                {suggestion.Title}
                            </li>
                        ))}
                    </ul>
                )}
            </form>
        </div>
    );
};

export default SearchForm;
