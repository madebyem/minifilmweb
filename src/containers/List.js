import { connect } from "react-redux";
import List from "../components/List/List";
import * as actions from '../redux/actions';
import * as effects from "../redux/effects";



const mapStateToProps = (state,ownProps) => ({
    movies: state.moviesList,
    movie:state.movie,
    searchedMovies: Object.values(state.moviesList).filter((movie) => state.new[movie.imdbID] === true),
    filter:ownProps.match.params.filter
});

const mapDispatch = ({
    requestMoviesAction: effects.requestMoviesAction,


});

export default connect(mapStateToProps, mapDispatch)(List);