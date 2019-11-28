import {connect} from "react-redux";
import Main from "../components/Main/Mains";
import * as actions from '../redux/actions';
import * as effects from "../redux/effects";

const mapStateToProps = ({moviesReducer}) => ({
    movie: moviesReducer.movie,
    moviesList: moviesReducer.moviesList,
    currentMovie: moviesReducer.currentMovie,

});

const mapDispatch = ({
    searchAction: actions.searchAction,
    requestMoviesAction: effects.requestMoviesAction,
    requestDetailsAction: effects.requestDetailsAction,
});

export default connect(mapStateToProps, mapDispatch)(Main);
