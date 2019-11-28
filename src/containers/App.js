import {connect} from "react-redux";
import App from "../App";
import {authCheckState} from "../redux/effects";


const mapStateToProps = (state) => ({
    movies: {...state.moviesReducer},
    user: {...state.userReducer}

});
const mapDispatchToProps = (dispatch) => {
    return {
        onTryAutoSignUp: () => dispatch(authCheckState())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);