import {connect} from "react-redux";
import MyMovies from "../components/MyMovies/MyMovies";
import * as actions from '../redux/actions';

function sorting(direction) {

    return function (a, b) {

        if (a.rating === b.rating) {
            return 0;
        } else if (!a.rating && !a.liked) {
            return 1;
        } else if (!b.rating && !b.liked) {
            return -1;
        } else if (a.liked && !a.rating) {
            if (direction === "worst") {
                return a.rating < b.rating ? -1 : 1;
            } else {
                return a.rating < b.rating ? 1 : -1;
            }

        } else if (b.liked && !b.rating) {
            if (direction === "worst") {
                return a.rating < b.rating ? -1 : 1;
            } else {
                return a.rating < b.rating ? 1 : -1;
            }
        } else if (direction === "worst") {
            return a.rating < b.rating ? -1 : 1;
        }
        // if descending, highest sorts first
        else {
            return a.rating < b.rating ? 1 : -1;
        }


    };

}


const mapStateToProps = (state) => ({
    seenMovies: Object.values(state.moviesReducer.moviesList).filter((movie) => movie.seen === true),
    isAuth: state.userReducer.isAuth,
    sortedMovies: Object.values(state.moviesReducer.moviesList).filter((movie) => movie.seen === true).sort(sorting(state.moviesReducer.sortingDirection)),
});

const mapDispatch = ({
    sort: actions.sort,


});
export default connect(mapStateToProps, mapDispatch)(MyMovies);