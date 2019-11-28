import {connect} from "react-redux";
import AddToWatch from "../components/AddToWatch/AddToWatch";
import * as actions from '../redux/actions';


const mapStateToProps = (state, props) => ({
    watchlist: state.moviesReducer.moviesList,
    movieToWatch: props.movieToWatch,
    toWatch: props.toWatch,
    isAuth: state.userReducer.isAuth,
});

const mapDispatch = ({
    addWatchlistAction: actions.addWatchlistAction,
    likeAction: actions.likeAction,
    watchedAction: actions.watchedAction,
    rate: actions.rateAction,

});

export default connect(mapStateToProps, mapDispatch)(AddToWatch);