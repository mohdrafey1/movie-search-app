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

## Project Structure

- `src/`
  - `components/`
    - `App.js` - Main component setting up the context provider and fetching initial data.
    - `MovieContextProvider.js` - Context provider component managing movie data state.
    - `MovieList.js` - Component consuming the context and displaying a list of movies.
    - `MovieCard.js` - Component displaying individual movie data with a button to view details.
    - `SearchForm.js` - Component with a form to search for movies by title.
    - `MovieDetail.js` - Component displaying detailed information for a selected movie.
  - `services/`
    - `api.js` - Service function to fetch data from the OMDb API.
  - `styles/` - CSS files for styling the components.

## Components

### App Component

- Sets up the context provider.
- Fetches initial movie data from the OMDb API and provides it to the context.

### MovieContextProvider Component

- Creates a context for managing movie data.
- Implements functions to update the context state.

### MovieList Component

- Consumes the context to display a list of movies.
- Passes necessary props to `MovieCard` and `SearchForm`.

### MovieCard Component

- Displays individual movie data.
- Includes a button to view detailed movie information, opening the `MovieDetail` component.

### SearchForm Component

- Includes a form to search for movies by title.
- Handles form submission and makes API calls to fetch new movie data.

### MovieDetail Component

- Displays detailed movie information for the selected movie data.

## Styling

- Use CSS to style the components.
- Ensure the app is responsive.
- Add basic animations for displaying detailed movie information.

## Testing and Debugging

- Test the application thoroughly.
- Ensure API interactions and data updates work as expected.
- Handle potential errors gracefully.
