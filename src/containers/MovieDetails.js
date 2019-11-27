import { connect } from "react-redux";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import * as actions from '../redux/actions';
import * as effects from "../redux/effects";


const mapDispatch = ({
    requestDetailsAction:effects.requestDetailsAction,



});
const mapStateToProps = (state,ownProps) => ({
    chosen: state.moviesList[state.currentMovie],
    filter:ownProps.match.params.filter





});

export default connect(mapStateToProps, mapDispatch)(MovieDetails);