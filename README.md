# Movie Search App

## Overview

This project is a React-based application that allows users to search for movies using the OMDb API. It includes components for displaying a list of movies, detailed movie information, and a search form for fetching movies by title. The project incorporates context for state management, modal popups for detailed views, and responsive styling.

## Features

- **Movie Search:** Users can search for movies by title.
- **Movie List:** Display a list of movies based on the search query.
- **Movie Details:** View detailed information about a selected movie.
- **Responsive Design:** The application is responsive and includes basic animations.

## Technologies Used

- React
- Axios
- React Modal
- CSS



## Components

### App Component

- **Purpose:** The main component that sets up the context provider and fetches initial movie data.
- **Key Features:**
  - Initializes the context provider to manage the global state.
  - Fetches and provides initial movie data to the context.

### MovieContextProvider Component

- **Purpose:** Manages the state of the movie data and provides it to other components.
- **Key Features:**
  - Creates a context for managing movie data.
  - Implements functions to update the context state, such as fetching new movie data based on user input.

### MovieList Component

- **Purpose:** Displays a list of movies based on the search query.
- **Key Features:**
  - Consumes the context to access movie data.
  - Passes movie data as props to `MovieCard` components.

### MovieCard Component

- **Purpose:** Displays individual movie data in a card format.
- **Key Features:**
  - Shows basic information about a movie.
  - Includes a button to view detailed information, which opens the `MovieDetail` component in a modal.

### SearchForm Component

- **Purpose:** Provides a form for users to search for movies by title.
- **Key Features:**
  - Handles form submission and makes API calls to fetch movie data based on the input title.
  - Updates the context with new movie data.

### MovieDetail Component

- **Purpose:** Displays detailed information about a selected movie.
- **Key Features:**
  - Shows comprehensive details about a movie, such as the plot, cast, and release date.
  - Presented in a modal popup for better user experience.

## Styling

- **CSS:** The application uses CSS for styling the components.
- **Responsive Design:** Ensures the app works well on different screen sizes.
- **Animations:** Added basic animations to enhance the display of detailed movie information.


## Live Demo

A live demo of the application can be found <a href="[https://example.com](https://movie-search-app-ruddy-one.vercel.app/)" target="_blank">Click Here</a>



## Installation and Get Started

1. Clone the repository:

    ```bash
    git clone https://github.com/mohdrafey1/movie-search-app.git
    cd movie-search-app
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a .env file in the root of the project and add your OMDb API key:
  
    ```bash
    REACT_APP_API_KEY=your_omdb_api_key
    ```

4. Start the development server:

    ```bash
    npm start
    ```

    The application will run on `http://localhost:3000`.
