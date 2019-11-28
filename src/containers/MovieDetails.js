import {connect} from "react-redux";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import * as effects from "../redux/effects";


const mapDispatch = ({
    requestDetailsAction: effects.requestDetailsAction,


});
const mapStateToProps = ({moviesReducer}, ownProps) => ({
    chosen: moviesReducer.moviesList[moviesReducer.currentMovie],
    filter: ownProps.match.params.filter
});

export default connect(mapStateToProps, mapDispatch)(MovieDetails);