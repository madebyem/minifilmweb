import { connect } from "react-redux";
import Favourites from "../components/Favourites/Favourites";
import * as actions from '../redux/actions';


const mapStateToProps = (state) => ({
    favourites: Object.values(state.moviesList).filter((movie)=> movie.liked===true)

});

export default connect(mapStateToProps)(Favourites);