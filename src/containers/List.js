import {connect} from "react-redux";
import List from "../components/List/List";
import * as effects from "../redux/effects";


const mapStateToProps = ({moviesReducer}, ownProps) => ({
    movies: moviesReducer.moviesList,
    movie: moviesReducer.movie,
    searchedMovies: Object.values(moviesReducer.moviesList).filter((movie) => moviesReducer.new[movie.imdbID] === true),
    filter: ownProps.match.params.filter
});

const mapDispatch = ({
    requestMoviesAction: effects.requestMoviesAction,


});

export default connect(mapStateToProps, mapDispatch)(List);