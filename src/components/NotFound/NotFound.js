import React from "react";
import {Link} from "react-router-dom";
import classes from "../Logout/Logout.module.css";

class NotFound extends React.Component {

    render() {

        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center"}}>
                <h1>Sorry, this page doesn't exist</h1>
                <Link className={classes.gobacklink} to="/" style={{marginBottom: "2rem"}}>
                    <button className={classes.goback}>Home Page</button>
                </Link>
                <iframe src='https://gfycat.com/ifr/BraveSnarlingChanticleer' frameBorder='0' scrolling='no'
                        allowFullScreen width='640' height='666' title="Confused Vincent"></iframe>
            </div>
        );
    }
}

export default NotFound;