import {connect} from "react-redux";
import Rating from "../components/Rating/Rating";
import * as actions from '../redux/actions';


const mapStateToProps = (state, props) => ({
    ratedMovies: Object.values(state.moviesReducer.moviesList),
    ratedMovie: props.ratedMovie,
    rating: props.ratedMovie.rating,
    isAuth: state.userReducer.isAuth,


});

const mapDispatch = ({
    rate: actions.rateAction,
    addWatchlistAction: actions.addWatchlistAction,
    watchedAction: actions.watchedAction,


});
export default connect(mapStateToProps, mapDispatch)(Rating);