import { connect } from "react-redux";
import Watchlist from "../components/Watchlist/Watchlist";
import * as actions from '../redux/actions';


const mapStateToProps = (state) => ({
    watchlist: Object.values(state.moviesList).filter((movie)=> movie.toWatch===true)

});

export default connect(mapStateToProps)(Watchlist);