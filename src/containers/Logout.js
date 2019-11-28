import Logout from '../components/Logout/Logout';
import {logout} from "../redux/actions";
import {connect} from "react-redux";

const mapStateToProps = (store) => ({
    ...store.user,
});

const mapDispatch = ({
    logout: logout,

});

export default connect(mapStateToProps, mapDispatch)(Logout);