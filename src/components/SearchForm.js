import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContextProvider';
import '../App.css';

const SearchForm = () => {
    const { setSearchQuery } = useContext(MovieContext);
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchQuery(query);
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
            </form>
        </div>
    );
};

export default SearchForm;
