import React from "react";
import {HashRouter, Route, Switch, Link, NavLink} from "react-router-dom";

class NotFound extends React.Component {
    constructor(props){
        super(props)
    }



    render() {

        return (
            <div align="center">
                <h1>Sorry, this page doesn't exist</h1>

                <iframe src='https://gfycat.com/ifr/BraveSnarlingChanticleer' frameBorder='0' scrolling='no'
                        allowFullScreen width='640' height='666'></iframe>



            </div>
        );
    }
}

export default NotFound;