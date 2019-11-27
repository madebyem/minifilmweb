import { connect } from "react-redux";
import Main from "../components/Main/Main";
import * as actions from '../redux/actions';
import * as effects from "../redux/effects";

const mapStateToProps = (state) => ({
  movie: state.movie,
  moviesList: state.moviesList,
  currentMovie: state.currentMovie,
  // searchedMovies: Object.values(state.moviesList).filter((movie) => state.new[movie.imdbID] === true)


});


const mapDispatch = ({
  searchAction: actions.searchAction,
  requestMoviesAction: effects.requestMoviesAction,
  requestDetailsAction:effects.requestDetailsAction,
});

export default connect(mapStateToProps, mapDispatch)(Main);
