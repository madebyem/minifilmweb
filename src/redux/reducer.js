import {
  REQUEST_RESULTS,
  REQUEST_RESULTS_FAILURE,
  REQUEST_RESULTS_SUCCESS,
  SEARCH_MOVIES,
  REQUEST_DETAILS,
  REQUEST_DETAILS_FAILURE,
  REQUEST_DETAILS_SUCCESS,
  LIKE_MOVIE,
   WATCHED_MOVIE, SORT,
  ADD_WATCHLIST, RATE_MOVIE,
} from "./actions";


////////// jesli zdaze:
///1. Warunki w renderach dorobic, nie wiem jakie :P
///2. Poprawic reducera results i service, bo w serwisie zmieniam na obiekt a w reducerze na rozne rzeczy, ale tego nie ogarniam wiec watpie
const InitialState = {
  loadingMoviesState: 'idle',
  loadingDetailsState: 'idle',
  loadingDetailsError: null,
  loadingMoviesError: null,
  movie: '',
  moviesList: {},
  currentMovie: "",
  new:{},

};

const reducer = (state = InitialState, action) => {
  switch(action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        movie: action.movie,
      };


    case REQUEST_RESULTS:
      return {
        ...state,
        // moviesList: {},
        loadingMoviesState: 'in-progress',
        loadingMoviesError: null,
        new:{},
      };

    case REQUEST_RESULTS_SUCCESS:
      if(action.results){ //?
      const results=Object.values(action.results);
      const newMovieList={...state.moviesList};
      results.forEach((result)=>newMovieList[result.imdbID]={...newMovieList[result.imdbID],...result});
      const searched= {};
      results.forEach((result)=>searched[result.imdbID]=true);
      return {
        ...state,
        moviesList: newMovieList,
        loadingMoviesState: 'idle',
        new:searched,
      }}

      else{
        return {
         //???
        }

      }

    case REQUEST_RESULTS_FAILURE:
      return {
        ...state,
        moviesList: [],
        loadingMoviesState: 'error',
        loadingMoviesError: action.error,
      };
    case REQUEST_DETAILS:
      return {
        ...state,
        currentMovie: "",
        loadingDetailsState: 'in-progress',
        loadingDetailsError: null,

      };

    case REQUEST_DETAILS_SUCCESS:
      const newMoviesList = {...state.moviesList}
      if(state.moviesList[action.movieID]){
        newMoviesList[action.movieID] = {...newMoviesList[action.movieID], ...action.results};
        return{
          ...state,
          currentMovie:action.movieID,
          loadingDetailsState: 'idle',
          moviesList:newMoviesList,
        }
      }
      else {
        newMoviesList[action.movieID] = action.results;
        return{
          currentMovie:action.movieID,
          loadingDetailsState: 'idle',
          moviesList: newMoviesList

        }
      }


    case REQUEST_DETAILS_FAILURE:
      return {
        ...state,
        currentMovie: "",
        loadingDetailsState: 'error',
        loadingDetailsError: action.error,
      };

    case SORT:
      console.log(action.direction);
      return{
        ...state,
        sortingDirection: action.direction,
      }


    case LIKE_MOVIE:
      if(state.moviesList[action.movieID]){
      const currentMovie2 = state.moviesList[action.movieID];
      const updatedMovie2 = {
        ...currentMovie2,
        liked: !currentMovie2.liked,
        // rating:"6"
      }
      return {
        ...state,
        moviesList: {
          ...state.moviesList,
          [action.movieID]: updatedMovie2,
        }
      }}
      else{
        return{}//nie wiem xd
      }


    case WATCHED_MOVIE:
      if(state.moviesList[action.movieID]){
          const currentMovie = state.moviesList[action.movieID];
          const updatedMovie = {
            ...currentMovie,
            seen: !currentMovie.seen,
          }
            return {
              ...state,
              moviesList: {
                ...state.moviesList,
                [action.movieID]: updatedMovie,
              }
            }}
      else{
        return {}
      }




    case ADD_WATCHLIST:
      if(state.moviesList[action.movieID]){
      const currentMovie3 = state.moviesList[action.movieID];
      const updatedMovie3 = {
        ...currentMovie3,
        toWatch: !currentMovie3.toWatch,
      }
      return {
        ...state,
        moviesList: {
          ...state.moviesList,
          [action.movieID]: updatedMovie3,
        }
      }}
      else{
        return{}
      }

    case RATE_MOVIE:
      if(state.moviesList[action.movieID]){
      const currentMovie4 = state.moviesList[action.movieID];
          if(currentMovie4.rating){
            const updatedMovie4 = {
            ...currentMovie4,
            rating:null,
          }
            return{
              ...state,
              moviesList: {
                ...state.moviesList,
                [action.movieID]: updatedMovie4,
              }
          }}
          else{
              const updatedMovie4 = {
                ...currentMovie4,
                rating:action.rating,}
          return {
            ...state,
            moviesList: {
              ...state.moviesList,
              [action.movieID]: updatedMovie4,
            }
          }}}

      else{
        return{}
      }




    default:
      return state;
  }
};

export default reducer;
