import {connect} from "react-redux";
import Rating from "../components/Rating/Rating";
import * as actions from '../redux/actions';
import * as effects from "../redux/effects";


const mapStateToProps = (state,props) => ({
    ratedMovies: Object.values(state.moviesList),
    ratedMovie:props.ratedMovie,
    rating:props.ratedMovie.rating,




});

const mapDispatch = ({
    rate: actions.rateAction,
    addWatchlistAction: actions.addWatchlistAction,
    watchedAction:actions.watchedAction,


});
export default connect(mapStateToProps,mapDispatch)(Rating);