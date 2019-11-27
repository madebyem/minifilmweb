import { connect } from "react-redux";
import MyMovies from "../components/MyMovies/MyMovies";
import * as actions from '../redux/actions';
import * as effects from "../redux/effects";
function sorting(direction) {

    return function (a, b) { //bardzo dziwne rzeczy i prawie działa :D

        if (a.rating === b.rating) {
            return 0;
        }
        else if(!a.rating&&!a.liked){
            return 1;
        }
        else if(!b.rating&&!b.liked){
            return -1;
        }
        else if(a.liked&&!a.rating){
         if (direction==="worst") {
                return a.rating < b.rating ? -1 : 1;
            }
            else {
                return a.rating < b.rating ? 1 : -1;
            }

        }
        else if(b.liked&&!b.rating){
            if (direction==="worst") {
                return a.rating < b.rating ? -1 : 1;
            }
            else {
                return a.rating < b.rating ? 1 : -1;
            }
        }

        else if (direction==="worst") {
            return a.rating < b.rating ? -1 : 1;
        }
        // if descending, highest sorts first
        else {
            return a.rating < b.rating ? 1 : -1;
        }


    };

}


const mapStateToProps = (state) => ({
    seenMovies: Object.values(state.moviesList).filter((movie)=> movie.seen===true),
    // sortedMovies: Object.values(state.moviesList).filter((movie)=> movie.seen===true).sort((a, b) => {
    //         if (state.sortingDirection === 'worst') {
    //             return (a.liked===true)-(b.liked===true)||(a.rating===null)-(b.rating===null) || (a.rating>b.rating)||-(a.rating<b.rating);
    //         } else {
    //             return (a.liked===true)-(b.liked===true)||(a.rating===null)-(b.rating===null)|| -(a.rating>b.rating)||+(a.rating<b.rating)  ;
    //         }
    //     }),
    sortedMovies:Object.values(state.moviesList).filter((movie)=> movie.seen===true).sort(sorting(state.sortingDirection))
//zawsze bezocenowe za sa dole
});

const mapDispatch = ({
    sort: actions.sort,


});
export default connect(mapStateToProps,mapDispatch)(MyMovies);