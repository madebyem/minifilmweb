import {connect} from "react-redux";
import Favourites from "../components/Favourites/Favourites";


const mapStateToProps = (state) => ({
    favourites: Object.values(state.moviesReducer.moviesList).filter((movie) => movie.liked === true),
    isAuth: state.userReducer.isAuth,

});

export default connect(mapStateToProps)(Favourites);