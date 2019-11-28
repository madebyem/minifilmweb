import {connect} from "react-redux";
import Seen from "../components/Seen/Seen";
import * as actions from '../redux/actions';


const mapStateToProps = (state, props) => ({
    seenMovies: state.moviesReducer.moviesList,
    seenMovie: props.seenMovie,
    seen: props.seen,
    isAuth: state.userReducer.isAuth,

});

const mapDispatch = ({
    watchedAction: actions.watchedAction,
    addWatchlistAction: actions.addWatchlistAction,
    likeAction: actions.likeAction,
    rate: actions.rateAction,


});

export default connect(mapStateToProps, mapDispatch)(Seen);