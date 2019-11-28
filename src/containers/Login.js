import Login from '../components/Login/Login';
import {login} from "../redux/effects";
import {connect} from "react-redux";

const mapStateToProps = ({userReducer}) => ({
    ...userReducer
});

const mapDispatch = (dispatch) => ({
    login: dispatch(login()),

});
export default connect(mapStateToProps, mapDispatch)(Login);