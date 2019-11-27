
import { MovieService } from "../services/MovieService";
import {
  requestMoviesFailure,
  requestMoviesStart,
  requestMoviesSuccess,
  requestDetailsFailure,
  requestDetailsSuccess,
  requestMovieDetails,
  RATE_MOVIE,
  rateAction, setRateAction
} from "./actions";

// Tym "pobieramy" instancję serwisu - dzięki temu Singletonowi zawsze jest tylko JEDEN SERWIS FILMÓW (gdziekolwiek tego użyjesz)
// Pamiętasz instancje klas i `new MyClass`? To zawsze tworzyło nową instancję, tutaj zawsze jest jedna!
const movies = MovieService.getInstance();

/**
 * Pierwsza różnica - zwracamy stąd funkcję, która używa wewnątrz dispatcha!
 * Ta funkcja zawiera w sobie całą niezbędną logikę do asynchronicznej komunikacji
 */
export const requestMoviesAction = (movieName) => {
  return dispatch => {
    dispatch(requestMoviesStart(movieName));

    return movies.searchByName(movieName).then((results) => {
      dispatch(requestMoviesSuccess(movieName, results));
    }).catch((err) => {
      dispatch(requestMoviesFailure(movieName, err));
    })
  }
};

export const requestDetailsAction = (movieID) => {
  return dispatch => {
    dispatch(requestMovieDetails(movieID));

    return movies.getById(movieID).then((results) => {
      dispatch(requestDetailsSuccess(movieID, results));
    }).catch((err) => {
      dispatch(requestDetailsFailure(movieID, err));
    })
  }
};


