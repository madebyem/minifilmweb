import Register from '../components/Register/Register';
import {register} from "../redux/effects";
import {connect} from "react-redux";

const mapStateToProps = ({userReducer}) => ({
    ...userReducer
});

const mapDispatch = (dispatch) => ({
    register: dispatch(register()),

});
export default connect(mapStateToProps, mapDispatch)(Register);