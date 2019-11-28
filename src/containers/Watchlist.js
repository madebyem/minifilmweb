import {connect} from "react-redux";
import Watchlist from "../components/Watchlist/Watchlist";


const mapStateToProps = (state) => ({
    watchlist: Object.values(state.moviesReducer.moviesList).filter((movie) => movie.toWatch === true),
    isAuth: state.userReducer.isAuth,
});

export default connect(mapStateToProps)(Watchlist);