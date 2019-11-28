import React from "react";
import Movie from "../Movie/Movie";
import classes from './Watchlist.module.css'
import {Link} from "react-router-dom";

class Watchlist extends React.Component {
    render() {
        if (!this.props.watchlist) {
            return null;
        }
        return (
            <div className={classes.container}>
                <div>
                    <h1 className={classes.title}> My Watchlist</h1>
                </div>
                {this.props.isAuth ? <div className={classes.list}>
                        {this.props.watchlist.map((item, index) => (
                            <Movie key={item.imdbID} movie={item} onSelect={this.props.onSelect}/>
                        ))}
                    </div> :
                    <div className={classes.pleaseLogin}>
                        <h3>Please log in to see your watchlist</h3>
                        <Link className={classes.gobacklink} to="/login">
                            <button className={classes.goback}>Log in</button>
                        </Link></div>}

            </div>

        )
    }
}

export default Watchlist;