import {connect} from "react-redux";
import Heart from "../components/Heart/Heart";
import * as actions from '../redux/actions';


const mapStateToProps = (state, props) => ({
    favourites: state.moviesReducer.moviesList,
    likedMovie: props.likedMovie,
    isAuth: state.userReducer.isAuth,

});

const mapDispatch = ({
    likeAction: actions.likeAction,
    watchedAction: actions.watchedAction,
    addWatchlistAction: actions.addWatchlistAction,

});

export default connect(mapStateToProps, mapDispatch)(Heart);