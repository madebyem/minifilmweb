export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const LIKE_MOVIE = "LIKE_MOVIE";
export const RATE_MOVIE = "RATE_MOVIE";
export const WATCHED_MOVIE = "WATCHED_MOVIE";
export const ADD_WATCHLIST = "ADD_WATCHLIST";
export const SORT="SORT";

//asynchron
export const REQUEST_RESULTS = "REQUEST_RESULTS"; // Pobranie listy wyników ("prośba" o pobranie)
export const REQUEST_RESULTS_FAILURE = "REQEST_RESULTS_FAILURE";
export const REQUEST_RESULTS_SUCCESS = "SHOW_RESULTS_SUCCESS";//lista wynikow
export const REQUEST_DETAILS="REQUEST_DETAILS";
export const REQUEST_DETAILS_FAILURE = "REQUEST_DETAILS_FAILURE";
export const REQUEST_DETAILS_SUCCESS = "SHOW_DETAILS_SUCCESS";


export const searchAction = (movie) => ({
  type: SEARCH_MOVIES,
  movie,
});

/**
 * Poniżej 3 klasyczne akcje
 * Używane będą w "efekcie" czyli takiej asynchronicznej akcji :)
 * Normalnie często trzyma je się w tym samym pliku, ale moim zdaniem to niewygodne
 */
export const requestMoviesStart = (movieName) => ({
  type: REQUEST_RESULTS,
  movieName,
});

export const requestMoviesSuccess = (movieName, results) => ({
  type: REQUEST_RESULTS_SUCCESS,
  movieName,
  results,
  receivedAt: Date.now(),
});

export const requestMoviesFailure = (movieName, error) => ({
  type: REQUEST_RESULTS_FAILURE,
  movieName,
  error,
  receivedAt: Date.now(),
});

export const requestMovieDetails = (movieID) => ({
  type: REQUEST_DETAILS,
  movieID,
});

export const requestDetailsSuccess = (movieID, results) => ({
  type: REQUEST_DETAILS_SUCCESS,
  movieID,
  results,
  receivedAt: Date.now(),
});

export const requestDetailsFailure = (movieID, error) => ({
  type: REQUEST_DETAILS_FAILURE,
  movieID,
  error,
  receivedAt: Date.now(),
});



export const likeAction = (movieID) => ({
  type: LIKE_MOVIE,
  movieID,
});


export const rateAction = (movieID,rating) => ({
  type: RATE_MOVIE,
  movieID,
  rating,
});

export const watchedAction = (movieID) => ({
  type: WATCHED_MOVIE,
  movieID,
});


export const addWatchlistAction = (movieID) => ({
  type: ADD_WATCHLIST,
  movieID,
});

export const sort=(direction)=>({
  type:SORT,
  direction,
});
