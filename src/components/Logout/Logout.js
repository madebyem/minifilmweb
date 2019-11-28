import React from "react";
import classes from './Logout.module.css';
import {Link} from "react-router-dom";

export default class Logout extends React.Component {
    componentDidMount() {
        this.props.logout();
    };

    render() {
        return (
            <div className={classes.loginwindow}>
                <div className={classes.loginform}>
                    <h1 style={{
                        textAlign: "center",
                        lineHeight: '2.25rem',
                        top: '12.75rem'
                    }}>The logout has been successful!</h1>
                    <Link className={classes.gobacklink} to="/">
                        <button className={classes.goback}>Home Page</button>
                    </Link>
                </div>
            </div>
        )
    }
}

